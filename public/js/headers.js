    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('openSidebarButton');
    const closeSidebarButton = document.getElementById('closeSidebarButton');
  
    openSidebarButton.addEventListener('click', () => {
      sidebar.classList.remove('hidden');
    });
  
    closeSidebarButton.addEventListener('click', () => {
      sidebar.classList.add('hidden');
    });