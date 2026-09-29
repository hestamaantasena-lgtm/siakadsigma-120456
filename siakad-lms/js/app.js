const router = {
  routes: {
      'dashboard': DashboardComponent,
      'siakad': SiakadComponent,
      'lms': LmsComponent
  },

  navigate: function(page) {
      const viewContainer = document.getElementById('app-view');
      if (!viewContainer) return;

      const component = this.routes[page] || this.routes['dashboard'];

      // Dynamic render html component
      viewContainer.innerHTML = component.render();

      // Update active navigation style
      document.querySelectorAll('#main-nav button').forEach(btn => {
          btn.className = 'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-slate-600 hover:bg-slate-50';
      });

      const activeNav = document.getElementById(`nav-${page}`);
      if (activeNav) {
          activeNav.className = 'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all bg-sky-50 text-sky-600 border border-sky-100 shadow-sm';
      }

      // Re-initialize Lucide Icons Safely
      setTimeout(() => {
          if (typeof lucide !== 'undefined' && lucide.createIcons) {
              lucide.createIcons();
          }
      }, 10);
  }
};

// Initialize app when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  router.navigate('dashboard');
});