import { removeHighlight } from "./hightLight";
import { deleteFeature } from "../../../API/deleteFeature";

const Panel = {
    sidePanel: document.getElementById('side-panel'),
    sidePanelContent: document.getElementById('side-panel-content'),
};

export async function toggleSidePanel(feature, layerType) {
    if (!layerType || !feature) {
        if(!feature) {
            removeHighlight();
            Panel.sidePanel.style.left = '-400px';
            return;
        }
        if(feature.get("feature_type") === 'unit') layerType = "units";
    }


    //loading panel incase of api call
    let panelContent = `<h1> Loading... </h1>`;
    Panel.sidePanelContent.innerHTML = panelContent;
    if (document.getElementById('sidebar').classList.contains('hidden')) {
        Panel.sidePanel.style.left = '40px';
    } else Panel.sidePanel.style.left = '325px';
    await sidePanelLayerHandler(feature, layerType); // this set the panel content based on layer type

    // this is for panel positioning based on sidebar
    if (document.getElementById('sidebar').classList.contains('hidden')) {
        Panel.sidePanel.style.left = '40px';
    } else Panel.sidePanel.style.left = '325px';

    if(document.getElementById('ddlistdropdown')){
        document.getElementById('ddlistx').addEventListener('click', function () {
            const ddlistdropdown = document.getElementById('ddlistdropdown')
            ddlistdropdown.classList.toggle('hidden')
        })
    }

}


const sidePanelLayerHandler = async (feature, layerType) => {
        let panelContent = null;
        const name = getName(feature);
        panelContent = '<p class="mt-2 ml-2 text-gray-700 text-base"><b>Name : </b> ' + name + "</p>"
        panelContent += '<p class="mt-2 ml-2 text-gray-700 text-base"><b>Id : </b>' + feature.getId() + "</p>";
        panelContent += '<p class="mt-2 ml-2 text-gray-700 text-base"><b>Type : </b>' + feature.values_.feature_type + "</p>";

        // Add delete button and confirmation dialog
        panelContent += `<div class="flex justify-end">
            <button id="delete-button" class="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Xóa
            </button></div>
            <div id="confirmation-dialog" class="hidden fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white p-6 rounded-md shadow-lg w-96">
                    <h2 class="text-xl font-bold mb-4">Xác nhận xóa</h2>
                    <p>Bạn có chắc muốn xóa đối tượng này?</p>
                    <div class="flex justify-end mt-4">
                        <button id="cancel-button" class="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 mr-2">
                            Hủy bỏ
                        </button>
                        <button id="confirm-delete-button" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
            <div id="success-dialog" class="hidden fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white p-6 rounded-md shadow-lg w-96">
                    <h2 class="text-xl font-bold mb-4 text-green-600">Xóa thành công</h2>
                    <p>Đối tượng đã được xóa thành công.</p>
                    <div class="flex justify-end mt-4">
                        <button id="success-close-button" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        `;
        Panel.sidePanelContent.innerHTML = panelContent;

        const deleteButton = document.getElementById("delete-button");
        const confirmationDialog = document.getElementById("confirmation-dialog");
        const cancelButton = document.getElementById("cancel-button");
        const confirmDeleteButton = document.getElementById("confirm-delete-button");
        const successDialog = document.getElementById("success-dialog");
        const successCloseButton = document.getElementById("success-close-button");

        // Show the confirmation dialog
        deleteButton.addEventListener("click", () => {
            confirmationDialog.classList.remove("hidden");
        });

        // Hide the confirmation dialog
        cancelButton.addEventListener("click", () => {
            confirmationDialog.classList.add("hidden");
        });

        // Handle delete confirmation
        confirmDeleteButton.addEventListener("click", async () => {
            confirmationDialog.classList.add("hidden");
            await deleteFeature(feature.getId(), feature.values_.feature_type); // Ensure async/await for deleteFeature
            console.log("deleted");

            // Show success dialog
            successDialog.classList.remove("hidden");
        });

        // Close the success dialog
        successCloseButton.addEventListener("click", () => {
            successDialog.classList.add("hidden");
            location.reload();
        });
};



function getName(feature) {
    let name = null;
    if (feature.values_.name) {
        name = feature.values_.name.vi;
    } else if (feature.values_.alt_name) {
        if (unit.values_.alt_name.vi) {
            name = unit.values_.alt_name.vi;
        } else if (unit.values_.alt_name.en) {
            name = unit.values_.alt_name.en;
        } else {
            name = unit.values_.alt_name;
        }
    }else if (feature.values_.category) {
        name = feature.values_.category;
    }

    return name;
}

