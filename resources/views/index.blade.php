<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        @if (config('app.env') === 'local')
        <script type="module">
            import RefreshRuntime from "{{ env('DEV_SERVER_URL', 'http://localhost:3000') }}/@@react-refresh"
            RefreshRuntime.injectIntoGlobalHook(window)
            window.$RefreshReg$ = () => {}
            window.$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
        </script>
        @endif

        <!-- Scripts and CSS import -->
        @vite

    </head>
    <body>
        <div id='root'></div>
    </body>
</html>
