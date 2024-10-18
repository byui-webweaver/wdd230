
<script>
    const toggleSwitch = document.getElementById('darkModeToggle');

    toggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', toggleSwitch.checked);
    });
</script>
