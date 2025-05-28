const courseConfigs = {
        "ENG-101": 
        {
            tasks:
            [
            { name: "Essay 1", weight: 20 },
            { name: "Essay 2", weight: 25 },
            { name: "Oral Presentation", weight: 8 },
            { name: "Student Led Discussion", weight: 7 },
            { name: "Academic Summary and Critical Response", weight: 10 },
            { name: "Self-Progress Reflection", weight: 5 },
            { name: "Final", weight: 25 }
            ],
            grading: 
            [
            { min: 93, grade: "AA" },
            { min: 85, grade: "BA" },
            { min: 80, grade: "BB" },
            { min: 70, grade: "CB" },
            { min: 60, grade: "CC" },
            { min: 50, grade: "DC" },
            { min: 0, grade: "FF" }
            ]
        },

        "IR-101": 
      {
        tasks:
        [
        { name: "Midterm", weight: 35 },
        { name: "Final", weight: 35 },
        { name: "Quiz", weight: 20 },
        { name: "Participation", weight: 10 }
        ],
        grading:
        [
            { min: 95, grade: "A" },
            { min: 90, grade: "A-" },
            { min: 86, grade: "B+" },
            { min: 82, grade: "B" },
            { min: 78, grade: "B-" },
            { min: 74, grade: "C+" },
            { min: 70, grade: "C" },
            { min: 63, grade: "C-" },
            { min: 57, grade: "D+" },
            { min: 51, grade: "D" },
            { min: 0, grade: "F" }
        ]
    },
      
      "MATH-101": 
      {
        tasks:
        [
        { name: "Midterm 1", weight: 80/3 },
        { name: "Midterm 2", weight: 80/3 },
        { name: "Final", weight: 80/3 },
        { name: "Quizzes", weight: 10, maxScore: 10 },
        { name: "Homework", weight: 10 }
        ],
        grading:
        [
            { min: 80, grade: "A" },
            { min: 75, grade: "A-" },
            { min: 70, grade: "B+" },
            { min: 65, grade: "B" },
            { min: 60, grade: "B-" },
            { min: 55, grade: "C+" },
            { min: 50, grade: "C" },
            { min: 45, grade: "C-" },
            { min: 40, grade: "D+" },
            { min: 30, grade: "D" },
            { min: 0, grade: "F" }
        ]
    },

    "PHYS-101": 
      {
        tasks:
        [
        { name: "Midterm 1", weight: 15 },
        { name: "Midterm 2", weight: 20 },
        { name: "Final", weight: 25 },
        { name: "Lab", weight: 20 },
        { name: "Quizzes", weight: 10, maxScore: 10 },
        { name: "Homework", weight: 10 }
        ],
        grading:
        [
            { min: 85, grade: "A" },
            { min: 80, grade: "A-" },
            { min: 75, grade: "B+" },
            { min: 70, grade: "B" },
            { min: 65, grade: "B-" },
            { min: 60, grade: "C+" },
            { min: 55, grade: "C" },
            { min: 50, grade: "C-" },
            { min: 45, grade: "D+" },
            { min: 40, grade: "D" },
            { min: 0, grade: "F" }
        ]
    },

    "MATH-102": 
    {
        tasks:
        [
        { name: "Midterm 1", weight: 80/3 },
        { name: "Midterm 2", weight: 80/3 },
        { name: "Final", weight: 80/3 },
        { name: "Quizzes", weight: 10, maxScore: 10 },
        { name: "Homework", weight: 10 }
        ],
        grading:
        [
            { min: 80, grade: "A" },
            { min: 75, grade: "A-" },
            { min: 70, grade: "B+" },
            { min: 65, grade: "B" },
            { min: 60, grade: "B-" },
            { min: 55, grade: "C+" },
            { min: 50, grade: "C" },
            { min: 45, grade: "C-" },
            { min: 40, grade: "D+" },
            { min: 30, grade: "D" },
            { min: 0, grade: "F" }
        ]
    },

    
    "ENG-102": 
    {
        tasks: 
        [
            { name: "Library Skills Task", weight: 5 },
            { name: "Academic Essay", weight: 20 },
            { name: "Oral Presentation", weight: 20 },
            { name: "Research Paper Outline", weight: 10 },
            { name: "Research Paper", weight: 30 },
            { name: "Interview", weight: 15 },
        ],
        grading:
        [
            { min: 95, grade: "A" },
            { min: 90, grade: "A-" },
            { min: 86, grade: "B+" },
            { min: 82, grade: "B" },
            { min: 78, grade: "B-" },
            { min: 74, grade: "C+" },
            { min: 70, grade: "C" },
            { min: 67, grade: "C-" },
            { min: 63, grade: "D+" },
            { min: 59, grade: "D" },
            { min: 0, grade: "F" }
        ]
    },

    "PHYS-102": 
      {
        tasks:
        [
        { name: "Midterm 1", weight: 20 },
        { name: "Midterm 2", weight: 20 },
        { name: "Final", weight: 20 },
        { name: "Lab", weight: 20 },
        { name: "Quizzes", weight: 10, maxScore: 10 },
        { name: "Homework", weight: 10 }
        ],
        grading:
        [
            { min: 85, grade: "A" },
            { min: 80, grade: "A-" },
            { min: 75, grade: "B+" },
            { min: 70, grade: "B" },
            { min: 65, grade: "B-" },
            { min: 60, grade: "C+" },
            { min: 55, grade: "C" },
            { min: 50, grade: "C-" },
            { min: 45, grade: "D+" },
            { min: 40, grade: "D" },
            { min: 0, grade: "F" }
        ]
    },
    "POLS-102": 
      {
        tasks:
        [
        { name: "Midterm", weight: 40 },
        { name: "Final", weight: 40 },
        { name: "Quiz 1", weight: 10},
        { name: "Quiz 2", weight: 10}
        ],
        grading:
        [
            { min: 95, grade: "A" },
            { min: 90, grade: "A-" },
            { min: 86, grade: "B+" },
            { min: 82, grade: "B" },
            { min: 78, grade: "B-" },
            { min: 74, grade: "C+" },
            { min: 70, grade: "C" },
            { min: 63, grade: "C-" },
            { min: 57, grade: "D+" },
            { min: 51, grade: "D" },
            { min: 0, grade: "F" }
        ]
    }
    };


    const addedCourses = new Set();

    function toggleTheme() {
      document.documentElement.classList.toggle("dark");
    }

    function addCourse() {
      const course = document.getElementById("courseSelect").value;
      if (!course || addedCourses.has(course)) return;
      addedCourses.add(course);

      const formDiv = document.createElement("div");
      formDiv.className = "border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:scale-105 transition duration-300";

      let inputsHTML = "";
      courseConfigs[course].tasks.forEach((exam, index) => {
        inputsHTML += `
        <div class="mb-3">
        <label class="block font-medium mb-1">
        ${exam.name} (%${exam.weight}, max ${exam.maxScore || 100}):
        </label>
        <input
        type="number"
        class="exam w-full border rounded p-2 bg-gray-50 text-black"
        data-weight="${exam.weight}"
        data-max="${exam.maxScore || 100}"
        placeholder="0-${exam.maxScore || 100}"
        max="${exam.maxScore || 100}"
        required
        >
        </div>
`       ;

      });

      formDiv.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${course}</h3>
        ${inputsHTML}
        <button onclick="calculateGrade(this, '${course}')" class="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition flex items-center">
          <span class="mr-2">🧮</span> Hesapla
        </button>
        <div class="result mt-4"></div>
      `;

      document.getElementById("formsArea").appendChild(formDiv);
    }

    function calculateGrade(button, courseName) {
      const parent = button.parentElement;
      const inputs = parent.querySelectorAll(".exam");
    const result = parent.querySelector(".result");
      let total = 0;
      let sumWeights = 0;

      inputs.forEach(input => {
        const weight = parseFloat(input.getAttribute("data-weight"));
        const score = parseFloat(input.value);

        if (!isNaN(score)) 
            {
            const maxScore = parseFloat(input.getAttribute("data-max")) || 100;

            if (score > maxScore) 
                {
                result.innerHTML = `<div class="text-red-600 font-bold">⚠️ The input should be maximum ${maxScore}!</div>`;
                input.classList.add("border-red-500");
                return;
                }

            const normalized = (score / maxScore) * 100;
            total += normalized * (weight / 100);
            sumWeights += weight;
            }
        });


    if (sumWeights > 100.2 || sumWeights < 99.8) {
        result.innerHTML = `<div class="text-red-600 font-bold">Error: Grade distribution do not add up to 100!</div>`;
        return;
    }

    const gradingScale = courseConfigs[courseName].grading;
    let grade = "N/A";

    for (let rule of gradingScale) 
        {
        if (total >= rule.min) 
            {
            grade = rule.grade;
            break;
            }
        }

      const gradeColor = grade === "FF" ? "text-red-600" : "text-green-600";

      result.innerHTML = `
        <div class="p-4 bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-lg shadow-sm">
          <p>📊 Average: <span class="font-bold text-blue-700 dark:text-blue-300">${total.toFixed(2)}</span></p>
          <p>🏅 Letter Grade: <span class="font-bold ${gradeColor}">${grade}</span></p>
        </div>
      `;
    }