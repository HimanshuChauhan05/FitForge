document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        document.getElementById('bmi-value').textContent = bmi;

        let range = '';
        let rangeColor = '';

        if (bmi < 18.5) {
            range = 'Underweight';
            rangeColor = '#FF6347';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            range = 'Normal weight';
            rangeColor = '#32CD32'; 
        } else if (bmi >= 25 && bmi < 29.9) {
            range = 'Overweight';
            rangeColor = '#FFD700';
        } else {
            range = 'Obesity';
            rangeColor = '#FF4500'; 
        }

        const bmiRangeElement = document.getElementById('bmi-range-value');
        bmiRangeElement.textContent = range;
        bmiRangeElement.style.backgroundColor = rangeColor;
        bmiRangeElement.style.color = '#fff';
    } else {
        alert('Please enter valid values for height and weight.');
    }
});
