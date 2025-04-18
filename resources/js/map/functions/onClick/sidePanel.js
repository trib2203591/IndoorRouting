import { removeHighlight } from "./hightLight";
import { deleteFeature } from "../../../API/IMDFFeatures/deleteFeature";
import { getFeatureById } from "../../../API/IMDFFeatures/getFeatureById";
import { updateIMDFFeature } from "../../../API/IMDFFeatures/updateFeature";

const Panel = {
    sidePanel: document.getElementById('side-panel'),
    sidePanelContent: document.getElementById('side-panel-content'),
};

export async function toggleSidePanel(feature, layerType) {
    if (!layerType || !feature) {
        if(!feature) {
            removeHighlight();
            Panel.sidePanel.style.left = '-500px';
            return;
        }
        if(feature.get("feature_type") === 'unit') layerType = "units";
    }


    //loading panel incase of api call
    let panelContent = `<h1> Đang tải... </h1>`;
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
        let res = await getFeatureById(feature.getId(), feature.values_.feature_type);
        const featureDetail = JSON.stringify(res.features[0], null, 2);
        panelContent = `<h3 class="font-extrabold text-scndBlue mt-2 ml-2">Dữ liệu đối tượng: </h3>`
        panelContent += `<textarea id="featureJson" class="mt-2 w-full min-h-[450px] p-2 border-2 border-gray-300 rounded-md" spellcheck="false">${featureDetail}</textarea>`
        // Add delete button and confirmation dialog
        panelContent += `<div class="flex justify-end">
            <button id="update-button" class="mr-2 mt-2 bg-scndBlue text-white px-4 py-2 rounded-md hover:bg-thirdBlue">
                Cập nhật
            </button>
            <button id="delete-button" class="mr-2 mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
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

             <div id="update-confirmation-dialog" class="hidden fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white p-6 rounded-md shadow-lg w-96">
                    <h2 class="text-xl font-bold mb-4">Xác nhận cập nhật</h2>
                    <p>Bạn có chắc muốn cập nhật đối tượng này?</p>
                    <div class="flex justify-end mt-4">
                        <button id="update-cancel-button" class="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 mr-2">
                            Hủy bỏ
                        </button>
                        <button id="confirm-update-button" class="bg-scndBlue text-white px-4 py-2 rounded-md hover:bg-thirdBlue">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
            <div id="update-success-dialog" class="hidden fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white p-6 rounded-md shadow-lg w-96">
                    <h2 class="text-xl font-bold mb-4 text-green-600">Cập nhật thành công</h2>
                    <p>Đối tượng đã được cập nhật thành công.</p>
                    <div class="flex justify-end mt-4">
                        <button id="update-success-close-button" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
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
            try {
                await deleteFeature(feature.getId(), feature.values_.feature_type); // Ensure async/await for deleteFeature
                console.log("deleted");
                successDialog.classList.remove("hidden");
            } catch (error) {
                console.error("Error deleting feature:", error);
                alert("An error occurred while deleting the feature.");
            }
            // Show success dialog

        });

        // Close the success dialog
        successCloseButton.addEventListener("click", () => {
            successDialog.classList.add("hidden");
            location.reload();
        });


        const updateButton = document.getElementById("update-button");
        const updateConfirmationDialog = document.getElementById("update-confirmation-dialog");
        const updateCancelButton = document.getElementById("update-cancel-button");
        const confirmUpdateButton = document.getElementById("confirm-update-button");
        const updateSuccessDialog = document.getElementById("update-success-dialog");
        const updateSuccessCloseButton = document.getElementById("update-success-close-button");

        // Show the confirmation dialog
        updateButton.addEventListener("click", () => {
            updateConfirmationDialog.classList.remove("hidden");
        });

        // Hide the confirmation dialog
        updateCancelButton.addEventListener("click", () => {
            updateConfirmationDialog.classList.add("hidden");
        });

        // Handle delete confirmation
        confirmUpdateButton.addEventListener("click", async () => {
            try {
                updateConfirmationDialog.classList.add("hidden");
                const featureJsonElement = document.getElementById("featureJson");
                const featureJsonText = featureJsonElement.value;
                await updateIMDFFeature(feature.getId(), feature.values_.feature_type, featureJsonText);
                updateSuccessDialog.classList.remove("hidden");
                console.log("updated");
            } catch (error) {
                console.log(error);
                alert(error);
            }
        });

        // Close the success dialog
        updateSuccessCloseButton.addEventListener("click", () => {
            updateSuccessDialog.classList.add("hidden");
            location.reload();
        });
};




