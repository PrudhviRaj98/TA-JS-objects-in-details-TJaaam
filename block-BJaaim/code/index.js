class Question {
    constructor(Title, Options, Correct) {
        this.Title = Title
        this.Options = Options
        this.Correct = Correct
    }
    isCorrect(answer) {
        return answer === this.Correct
    }
    getCorrectAnswer() {
        return this.Correct
    }
    createUI() {

    }
}

class quiz {
    constructor(allQuestions = [], activeIndex, score) {
        this.activeIndex = activeIndex;
        this.score = score;
    }
    nextQuestion() {

    }
    createUI() {

    }
    updateScore() {

    }

}