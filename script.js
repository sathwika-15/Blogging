document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            // Close all panels
            document.querySelectorAll('.panel').forEach(panel => {
                if (panel !== acc.nextElementSibling) {
                    panel.style.maxHeight = null;
                    panel.style.padding = '0 20px';
                }
            });

            // Toggle the current panel
            const panel = acc.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.padding = '0 20px';
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.style.padding = '10px 20px';
            }
        });
    });
});