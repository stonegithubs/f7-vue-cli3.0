<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main View -->
    <f7-view id="main-view" url="/" main class="safe-areas"></f7-view>

  </f7-app>
</template>

<script>
    // Import Routes
    import routes from './router/routes.js'
    export default {
        data() {
            return {
                // Framework7 parameters he re
                f7params: {
                    id: 'framework7-vue', // App bundle ID
                    name: 'Framework7-vue', // App name
                    theme: 'auto', // Automatic theme detection
                    // App routes
                    routes: routes,
                },
            }
        }
    }
</script>