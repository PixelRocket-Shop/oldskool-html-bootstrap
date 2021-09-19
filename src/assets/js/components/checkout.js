(function () {
    const billingToggle = document.querySelector('#same-address');
    const billingSection = document.querySelector('.billing-address');
    const paymentToggles = document.querySelectorAll('[name="checkoutPaymentMethod"]') || [];
    const cardFields = document.querySelector('.card-details');
    const paypalInfo = document.querySelector('.paypal-details');
    const STRIPE_ID = 'checoutPaymentStripe';
    const PAYPAL_ID = 'checkoutPaymentPaypal';


    const handlePaymentDisplay = ({
        type
    }) => {
        if (type === STRIPE_ID) {
            paypalInfo.classList.add('d-none');
            cardFields.classList.remove('d-none');
        } else {
            paypalInfo.classList.remove('d-none');
            cardFields.classList.add('d-none');
        }
    }

    if (billingToggle && billingSection) {
        billingToggle.addEventListener('change', (e) => {
            if (e && e.target && !e.target.checked) {
                billingSection.classList.remove('d-none');
            } else {
                billingSection.classList.add('d-none');
            }
        })
    }

    if (paymentToggles.length > 0) {
        paymentToggles.forEach((toggle) => {
            toggle.addEventListener('change', (e) => {
                if (e && e.target && e.target.id) {
                    handlePaymentDisplay({
                        type: e.target.id
                    });
                }
            })
        });
    }
})();