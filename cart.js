document.addEventListener('DOMContentLoaded', () => {
    const decrementButtons = document.querySelectorAll('.decrement');
    const incrementButtons = document.querySelectorAll('.increment');
    const removeButtons = document.querySelectorAll('.remove-item');
    
    function updateCartSummary() {
        let totalItems = 0;
        let totalPrice = 0;
        
        document.querySelectorAll('.cart-item').forEach(item => {
            const quantity = parseInt(item.querySelector('input').value);
            const price = parseFloat(item.querySelector('p').textContent.replace('$', ''));
            totalItems += quantity;
            totalPrice += price * quantity;
        });
        
        document.getElementById('total-items').textContent = totalItems;
        document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
    }
    
    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.nextElementSibling;
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
                updateCartSummary();
            }
        });
    });
    
    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            let value = parseInt(input.value);
            input.value = value + 1;
            updateCartSummary();
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.cart-item').remove();
            updateCartSummary();
        });
    });
    
    updateCartSummary();
});
