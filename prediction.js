document.addEventListener("DOMContentLoaded", function() {
    const predictionForm = document.getElementById("prediction-form");

    predictionForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const opponent = document.getElementById("opponent").value;
        const arsenalScore = parseInt(document.getElementById("arsenal-score").value);
        const opponentScore = parseInt(document.getElementById("opponent-score").value);
        const comments = document.getElementById("comments").value;

        // Calculate accuracy (you can replace this with your actual match result logic)
        const accuracy = Math.random() < 0.5; // 50% chance of accuracy

        // Store prediction data in local storage
        const predictionData = {
            opponent: opponent,
            arsenalScore: arsenalScore,
            opponentScore: opponentScore,
            comments: comments,
            accuracy: accuracy
        };
        localStorage.setItem("predictionData", JSON.stringify(predictionData));

        // Update comment section with prediction data
        const commentSection = document.getElementById("comment-section");
        commentSection.innerHTML = `
            <p>Your Prediction:</p>
            <p>Opponent: ${opponent}</p>
            <p>Arsenal Score: ${arsenalScore}</p>
            <p>Opponent Score: ${opponentScore}</p>
            <p>Comments: ${comments}</p>
            <p>Computer's Humble Opinion: ${accuracy ? "Ooooh I Like Your Chances!" : "Computer Says No Chance!"}</p>
        `;
    });
});