<div class="md:hidden mt-2 mb-2 flex justify-end">
    <button id="toggleSidebarMobile" class="rounded-md text-white py-1 px-4">
        <p class="text-lg">X</p>
    </button>
</div>


document.getElementById('toggleSidebarMobile').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebar2 = document.getElementById('sidebar2');
    const button = this;
    sidebar.classList.toggle('hidden');
    sidebar2.classList.toggle('hidden');
});
