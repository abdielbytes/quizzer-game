<template>
  <div class="create-quiz-container">
    <h1 class="text-2xl font-bold mb-4 text-center">Create a Quiz</h1>

    <form @submit.prevent="submitQuiz">
      <div class="input-group">
        <label for="title" class="label">Quiz Title</label>
        <input 
          type="text" 
          id="title" 
          v-model="quiz.title" 
          class="input centered-placeholder" 
          placeholder="Enter the quiz title"
          required 
        />
      </div>

      <div 
        v-for="(question, index) in quiz.questions" 
        :key="index" 
        class="question-group"
        :ref="setQuestionRef(index)"
      >
        <div class="input-group">
          <label :for="'question-' + index" class="label">Question {{ index + 1 }}</label>
          <input 
            type="text" 
            :id="'question-' + index" 
            v-model="question.questionText" 
            class="input centered-placeholder" 
            placeholder="Enter the question text"
            required 
          />
        </div>

        <div 
          v-for="(option, optionIndex) in question.options" 
          :key="optionIndex" 
          class="option-group"
        >
          <div class="input-group">
            <label :for="'option-' + index + '-' + optionIndex" class="label">
              Option {{ optionIndex + 1 }}
            </label>
            <input 
              type="text" 
              :id="'option-' + index + '-' + optionIndex" 
              v-model="option.optionText" 
              class="input centered-placeholder" 
              placeholder="Enter the option text"
              required 
            />
          </div>
          <div class="input-group flex items-center">
            <input 
              type="checkbox" 
              :id="'isCorrect-' + index + '-' + optionIndex" 
              v-model="option.isCorrect" 
              class="checkbox"
            />
            <label :for="'isCorrect-' + index + '-' + optionIndex" class="label ml-2">
              Correct Answer
            </label>
          </div>
        </div>

        <button type="button" @click="addOption(index)" class="add-option-button">
          Add Option
        </button>
      </div>

      <button type="button" @click="addQuestion" class="add-question-button">
        Add Question
      </button>

      <button type="submit" class="submit-button">
        Submit Quiz
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateQuiz',
  data() {
    return {
      quiz: {
        title: '',
        questions: [
          {
            questionText: '',
            options: [
              { optionText: '', isCorrect: false },
            ],
          },
        ],
      },
      questionRefs: [],
    };
  },
  methods: {
    setQuestionRef(index) {
      return (el) => {
        if (el) {
          this.questionRefs[index] = el;
        }
      };
    },
    addQuestion() {
      this.quiz.questions.push({
        questionText: '',
        options: [{ optionText: '', isCorrect: false }],
      });
      this.$nextTick(() => {
        this.scrollToQuestion(this.quiz.questions.length - 1);
      });
    },
    addOption(questionIndex) {
      this.quiz.questions[questionIndex].options.push({ optionText: '', isCorrect: false });
    },
    scrollToQuestion(index) {
      const element = this.questionRefs[index];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    async submitQuiz() {
      try {
        

        const response = await axios.post('http://localhost:5000/api/submit', this.quiz);
        console.log('Quiz created successfully:', response.data);
        // Redirect or show success message
        this.$router.push({ name: 'PublicQuizzes' });
      } catch (error) {
        console.error('Error creating quiz:', error);
        // Handle error (e.g., show error message)
      }
    },
  },
};
</script>

<style scoped>
.create-quiz-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.input-group {
  margin-bottom: 1rem;
}

.label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  outline: none;
  transition: border-color 0.2s;
}

.input:focus {
  border-color: #3182ce;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
}

.centered-placeholder::placeholder {
  text-align: center;
}

.checkbox {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.add-option-button,
.add-question-button,
.submit-button {
  background-color: #3182ce;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
}

.add-option-button:hover,
.add-question-button:hover,
.submit-button:hover {
  background-color: #2b6cb0;
}

.option-group {
  margin-left: 1rem;
}

.question-group {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f7fafc;
  border-radius: 0.375rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}
</style>
