// Storage Key
const STORAGE_VER = "dlms_v2026_nav_";

// Core Courses matching your exact image layout
const collegeCourses = [
  {
    id: 101,
    title: "Unit 1: Propositional Calculus, Normal Forms & Rules of Inference",
    category: "Module 1 - Formal Logic & Mathematical Reasoning",
    description: "Deep dive into connectives, 16 truth functions, tautology verification, normal forms (PDNF/PCNF), and predicate logic.",
    content: `
      <h3>1. Foundations of Propositional Logic</h3>
      <p>A proposition is a declarative sentence that is strictly either <b>True (T)</b> or <b>False (F)</b>. Discrete logic governs digital circuits, automated reasoning, and verification.</p>
      <table class="table-custom">
        <thead>
          <tr><th>Operation</th><th>Notation</th><th>Condition for TRUE</th><th>Boolean Form</th></tr>
        </thead>
        <tbody>
          <tr><td>Conjunction (AND)</td><td>P ∧ Q</td><td>True ONLY when both are True</td><td>P · Q</td></tr>
          <tr><td>Disjunction (OR)</td><td>P ∨ Q</td><td>True if at least one is True</td><td>P + Q</td></tr>
          <tr><td>Implication</td><td>P → Q</td><td>False ONLY when P = True and Q = False</td><td>¬P ∨ Q</td></tr>
          <tr><td>Biconditional</td><td>P ↔ Q</td><td>True if P and Q share identical values</td><td>(P → Q) ∧ (Q → P)</td></tr>
        </tbody>
      </table>
      <h3>2. Laws of Logical Equivalence</h3>
      <div class="callout-box">
        • De Morgan's: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q &nbsp;|&nbsp; ¬(P ∨ Q) ≡ ¬P ∧ ¬Q<br>
        • Contrapositive: P → Q ≡ ¬Q → ¬P<br>
        • Absorption: P ∨ (P ∧ Q) ≡ P
      </div>
      <h3>3. Rules of Inference</h3>
      <div class="formula-card">
        • Modus Ponens:       P, P → Q             ⇒ Q<br>
        • Modus Tollens:      ¬Q, P → Q            ⇒ ¬P<br>
        • Disjunctive Syll:   P ∨ Q, ¬P            ⇒ Q
      </div>
    `,
    labType: "logicLab",
    quizzes: [
      { q: "What is the truth value of (P → Q) when P is False and Q is True?", opts: ["True", "False", "Indeterminate", "None"], ans: 0, exp: "An implication is False ONLY when the hypothesis is True and conclusion is False." },
      { q: "Which expression represents the contrapositive of (¬p → q)?", opts: ["¬q → p", "p → ¬q", "q → ¬p", "¬p ∨ ¬q"], ans: 0, exp: "Contrapositive of A → B is ¬B → ¬A. Here: ¬q → p." },
      { q: "Which of the following is equivalent to the absorption law in logic?", opts: ["P ∨ (P ∧ Q) ≡ P", "P ∧ (P ∨ Q) ≡ Q", "P ∨ (¬P ∧ Q) ≡ Q", "P ∧ (¬P ∨ Q) ≡ P"], ans: 0, exp: "Absorption law: P ∨ (P ∧ Q) ≡ P." },
      { q: "A compound statement that evaluates to True under every possible truth assignment is a:", opts: ["Contingency", "Tautology", "Contradiction", "Fallacy"], ans: 1, exp: "A tautology is identically True for all interpretations." },
      { q: "What conclusion directly follows from premises: (p ∨ q) and ¬p?", opts: ["p", "q", "¬q", "p ∧ q"], ans: 1, exp: "By Disjunctive Syllogism: since p is False, q must be True." },
      { q: "Which logic gate corresponds to the negation of conjunction ¬(P ∧ Q)?", opts: ["NOR", "NAND", "XOR", "XNOR"], ans: 1, exp: "NAND represents NOT-AND: ¬(P ∧ Q)." },
      { q: "According to De Morgan's Laws, ¬(P ∨ Q) is logically equivalent to:", opts: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "P ∧ Q", "¬P ∨ Q"], ans: 0, exp: "De Morgan's law: ¬(P ∨ Q) ≡ ¬P ∧ ¬Q." },
      { q: "In Predicate Logic, what is the negation of ∀x (P(x) → Q(x))?", opts: ["∃x (P(x) ∧ ¬Q(x))", "∀x (¬P(x) ∧ Q(x))", "∃x (¬P(x) → ¬Q(x))", "∀x (P(x) ∨ ¬Q(x))"], ans: 0, exp: "Negation is ∃x (P(x) ∧ ¬Q(x))." },
      { q: "How many distinct minterms exist for a boolean function with 4 boolean variables?", opts: ["8", "12", "16", "32"], ans: 2, exp: "Total minterms = 2^4 = 16." },
      { q: "The rule of inference [P ∧ (P → Q)] ⇒ Q is formally titled:", opts: ["Modus Tollens", "Modus Ponens", "Hypothetical Syllogism", "Resolution"], ans: 1, exp: "Modus Ponens (affirming the antecedent)." },
      { q: "What is the truth value of (P ↔ Q) when P is False and Q is False?", opts: ["True", "False", "Indeterminate", "None"], ans: 0, exp: "Biconditional is True when both have identical values." },
      { q: "Which connective forms a functionally complete set alone?", opts: ["AND", "OR", "NAND", "IMPLICATION"], ans: 2, exp: "NAND is functionally complete." },
      { q: "Principal Conjunctive Normal Form (PCNF) consists of the conjunction of:", opts: ["Minterms", "Maxterms", "Tautologies", "Implications"], ans: 1, exp: "PCNF is the product of maxterms." },
      { q: "Under what condition is (P ⊕ Q) True?", opts: ["When both are True", "When P and Q have different truth values", "When both are False", "Always"], ans: 1, exp: "XOR is True when one operand is True and other is False." },
      { q: "The converse of conditional proposition P → Q is:", opts: ["Q → P", "¬P → ¬Q", "¬Q → ¬P", "P ∧ ¬Q"], ans: 0, exp: "Converse switches hypothesis and conclusion: Q → P." }
    ]
  },
  {
    id: 102,
    title: "Unit 2: Set Theory, Relations, Posets & Lattice Theory",
    category: "Module 2 - Algebraic Structures & Sets",
    description: "In-depth treatment of power sets, Cartesian coordinates, equivalence relations, Hasse diagrams, and Poset lattices.",
    content: `
      <h3>1. Advanced Set Theory & Operations</h3>
      <p>A set is an unordered collection of distinct elements.</p>
      <ul>
        <li>Power Set: |P(S)| = 2ⁿ</li>
        <li>Cartesian Product: |A × B| = |A| × |B|</li>
        <li>Symmetric Difference: A ⊕ B = (A - B) ∪ (B - A)</li>
      </ul>
      <h3>2. Relations & Properties</h3>
      <div class="callout-box">
        • Reflexive: ∀x ∈ A, (x, x) ∈ R<br>
        • Symmetric: (x, y) ∈ R ⇒ (y, x) ∈ R<br>
        • Antisymmetric: [ (x, y) ∈ R ∧ (y, x) ∈ R ] ⇒ x = y<br>
        • Transitive: [ (x, y) ∈ R ∧ (y, z) ∈ R ] ⇒ (x, z) ∈ R
      </div>
      <h3>3. Posets & Lattices</h3>
      <p>A relation is a <b>Poset</b> if it is Reflexive, Antisymmetric, and Transitive. A <b>Lattice</b> has a unique LUB (Join) and GLB (Meet) for every pair.</p>
    `,
    labType: "setLab",
    quizzes: [
      { q: "If Set A = {a, b, c, d}, how many elements are in its Power Set P(A)?", opts: ["8", "12", "16", "32"], ans: 2, exp: "|P(A)| = 2^4 = 16 elements." },
      { q: "How many non-empty proper subsets does a set of 3 elements have?", opts: ["6", "7", "8", "5"], ans: 0, exp: "Total = 2^3 = 8. Non-empty and proper: 8 - 2 = 6." },
      { q: "A relation that is Reflexive, Antisymmetric, and Transitive is a:", opts: ["Equivalence Relation", "Partial Order Relation", "Total Equivalence", "Strict Order"], ans: 1, exp: "Defines a Partial Ordering (Poset)." },
      { q: "A relation that is Reflexive, Symmetric, and Transitive is an:", opts: ["Equivalence Relation", "Poset", "Lattice", "Semigroup"], ans: 0, exp: "Defines an Equivalence Relation." },
      { q: "If |A| = 4 and |B| = 3, what is |A × B|?", opts: ["7", "12", "64", "81"], ans: 1, exp: "|A × B| = 4 × 3 = 12." },
      { q: "A Poset in which every pair has a unique LUB and GLB is a:", opts: ["Monoid", "Abelian Group", "Lattice", "Tree"], ans: 2, exp: "Formal definition of a Lattice." },
      { q: "In a Hasse diagram, which edges are removed?", opts: ["Transitive edges & Reflexive loops", "Only symmetric edges", "All horizontal edges", "Antisymmetric paths"], ans: 0, exp: "Loops and transitive shortcuts are omitted." },
      { q: "What is Symmetric Difference of A = {1, 2, 3} and B = {2, 3, 4}?", opts: ["{2, 3}", "{1, 4}", "{1, 2, 3, 4}", "{1}"], ans: 1, exp: "A ⊕ B = {1, 4}." },
      { q: "Relation on integers aRb if a ≡ b (mod 5) is:", opts: ["Equivalence Relation", "Partial Order", "Strictly Antisymmetric", "Irreflexive"], ans: 0, exp: "Modular equivalence is reflexive, symmetric, transitive." },
      { q: "If relation adjacency matrix is M, R is symmetric iff:", opts: ["M = Mᵀ", "M = -M", "M · M = I", "Trace(M) = 0"], ans: 0, exp: "M equals its transpose (M = Mᵀ)." },
      { q: "For set S with n elements, how many binary relations exist?", opts: ["2ⁿ", "2^(n²)", "n²", "2^(2n)"], ans: 1, exp: "Total relations = 2^(n²)." },
      { q: "A function that is both Injective and Surjective is a:", opts: ["Homomorphism", "Bijection", "Endomorphism", "Epimorphism"], ans: 1, exp: "Bijective function." },
      { q: "What is the complement of the Universal Set U?", opts: ["U", "Empty Set (∅)", "Singleton", "Subset"], ans: 1, exp: "U' = ∅." },
      { q: "In a Lattice, the operation a ∧ b represents:", opts: ["GLB (Meet)", "LUB (Join)", "Complement", "Direct Product"], ans: 0, exp: "Meet (∧) is Greatest Lower Bound." },
      { q: "Which property is violated if (1, 2) ∈ R and (2, 1) ∈ R for 1 ≠ 2 in a Poset?", opts: ["Reflexivity", "Antisymmetry", "Transitivity", "Completeness"], ans: 1, exp: "Violates Antisymmetry." }
    ]
  },
  {
    id: 103,
    title: "Unit 3: Advanced Combinatorics, Counting & Recurrence Relations",
    category: "Module 3 - Discrete Enumeration & Generating Functions",
    description: "Permutations, Combinations, Circular arrangements, Stars and Bars, Inclusion-Exclusion, and Pigeonhole Principle.",
    content: `
      <h3>1. Permutations & Combinations</h3>
      <div class="formula-card">
        • Linear Permutation:      P(n, r) = n! / (n - r)!<br>
        • Circular Permutation:    P_circ = (n - 1)!<br>
        • Linear Combination:      C(n, r) = n! / [ r! · (n - r)! ]<br>
        • Combinations with Rep:   C(n + r - 1, r)
      </div>
      <h3>2. Pigeonhole Principle (PHP)</h3>
      <div class="callout-box">
        If $N$ items are distributed into $k$ bins, at least one bin holds <code>⌈ N / k ⌉</code> items.
      </div>
    `,
    labType: "combLab",
    quizzes: [
      { q: "How many ways can 6 students be seated around a circular round table?", opts: ["720", "120", "360", "24"], ans: 1, exp: "(n - 1)! = 5! = 120." },
      { q: "Among 85 college students, min students sharing a birth month?", opts: ["7", "8", "9", "12"], ans: 1, exp: "⌈ 85 / 12 ⌉ = 8." },
      { q: "What is the value of C(7, 3)?", opts: ["21", "35", "210", "5040"], ans: 1, exp: "C(7, 3) = 35." },
      { q: "Arrangements of the letters in 'COMPUTER'?", opts: ["40320", "5040", "720", "120"], ans: 0, exp: "8! = 40,320." },
      { q: "Distinct anagrams of 'SUCCESS'?", opts: ["420", "5040", "1260", "840"], ans: 0, exp: "7! / (3! · 2!) = 420." },
      { q: "Integer solutions to x1 + x2 + x3 = 10 with non-negative values?", opts: ["66", "55", "45", "120"], ans: 0, exp: "C(3 + 10 - 1, 10) = C(12, 2) = 66." },
      { q: "Cards drawn from 52-card deck to guarantee 3 of same suit?", opts: ["9", "10", "11", "13"], ans: 0, exp: "4 suits × 2 + 1 = 9." },
      { q: "Characteristic equation for Fibonacci F(n) = F(n-1) + F(n-2)?", opts: ["r² - r - 1 = 0", "r² + r - 1 = 0", "r² - 2r + 1 = 0", "r² + 1 = 0"], ans: 0, exp: "r² - r - 1 = 0." },
      { q: "Bit strings of length 8 beginning with 1 or ending with 00?", opts: ["128", "160", "192", "224"], ans: 1, exp: "128 + 64 - 32 = 160." },
      { q: "If C(n, 2) = 28, value of n is:", opts: ["7", "8", "9", "10"], ans: 1, exp: "n(n-1)/2 = 28 => n = 8." },
      { q: "Handshakes among 30 people?", opts: ["435", "900", "870", "450"], ans: 0, exp: "C(30, 2) = 435." },
      { q: "Derangements of 3 objects D(3)?", opts: ["1", "2", "3", "6"], ans: 1, exp: "D(3) = 2." },
      { q: "Scores 0 to 100 among 100 students: guaranteed same score?", opts: ["1", "2", "3", "4"], ans: 0, exp: "101 distinct scores available, guarantee is 1." },
      { q: "Coefficient of x³y⁴ in (x + y)⁷?", opts: ["35", "21", "7", "70"], ans: 0, exp: "C(7, 3) = 35." },
      { q: "Pascal's identity: C(n, k) + C(n, k-1) equals:", opts: ["C(n+1, k)", "C(n+1, k+1)", "C(n, k+1)", "2 · C(n, k)"], ans: 0, exp: "C(n+1, k)." }
    ]
  }
];

const defaultStudents = [
  { regNo: "10001", dob: "2005-01-01", name: "Narean", completedCourses: [] },
  { regNo: "10002", dob: "2004-11-15", name: "Kavitha M", completedCourses: [] }
];

// Storage Helpers
function getStoredUsers() {
  const data = localStorage.getItem(STORAGE_VER + "users");
  if (!data) {
    localStorage.setItem(STORAGE_VER + "users", JSON.stringify(defaultStudents));
    return defaultStudents;
  }
  return JSON.parse(data);
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_VER + "users", JSON.stringify(users));
}

function getStoredCourses() {
  const data = localStorage.getItem(STORAGE_VER + "courses");
  if (!data) {
    localStorage.setItem(STORAGE_VER + "courses", JSON.stringify(collegeCourses));
    return collegeCourses;
  }
  return JSON.parse(data);
}

function saveCourses(courses) {
  localStorage.setItem(STORAGE_VER + "courses", JSON.stringify(courses));
}

let activeCourse = null;
let testAnswers = {};
let currentTestQIndex = 0;

// Authentication
function switchLoginTab(type) {
  const sBtn = document.getElementById("studentTabBtn");
  const aBtn = document.getElementById("adminTabBtn");
  const sForm = document.getElementById("studentLoginForm");
  const aForm = document.getElementById("adminLoginForm");

  if (type === "student") {
    sBtn.classList.add("active");
    aBtn.classList.remove("active");
    sForm.classList.remove("hidden");
    aForm.classList.add("hidden");
  } else {
    aBtn.classList.add("active");
    sBtn.classList.remove("active");
    aForm.classList.remove("hidden");
    sForm.classList.add("hidden");
  }
}

function handleStudentLogin(e) {
  e.preventDefault();
  const regNo = document.getElementById("studentRegNo").value.trim();
  const dob = document.getElementById("studentDob").value;

  if (regNo.length !== 5) {
    alert("Register Number must be 5 digits!");
    return;
  }

  const users = getStoredUsers();
  const user = users.find(u => String(u.regNo) === String(regNo) && u.dob === dob);

  if (user) {
    localStorage.setItem(STORAGE_VER + "session", JSON.stringify({ role: "student", regNo: String(user.regNo), name: user.name }));
    renderApp();
  } else {
    alert("Invalid 5-digit Reg No or DOB! \nUse Reg No: 10001 and DOB: 2005-01-01");
  }
}

function handleAdminLogin(e) {
  e.preventDefault();
  const u = document.getElementById("adminUser").value.trim();
  const p = document.getElementById("adminPass").value.trim();

  if (u === "admin" && p === "admin123") {
    localStorage.setItem(STORAGE_VER + "session", JSON.stringify({ role: "admin", name: "Administrator" }));
    renderApp();
  } else {
    alert("Invalid Admin username/password! Use admin / admin123");
  }
}

function logout() {
  localStorage.removeItem(STORAGE_VER + "session");
  renderApp();
}

// Student Tab Switcher (Home, Modules, About)
function switchStudentTab(tab) {
  document.getElementById("navHomeBtn").classList.toggle("active", tab === "home");
  document.getElementById("navModulesBtn").classList.toggle("active", tab === "modules");
  document.getElementById("navAboutBtn").classList.toggle("active", tab === "about");

  document.getElementById("studentTabHome").classList.toggle("hidden", tab !== "home");
  document.getElementById("studentTabModules").classList.toggle("hidden", tab !== "modules");
  document.getElementById("studentTabAbout").classList.toggle("hidden", tab !== "about");
}

// App Routing
function renderApp() {
  const session = JSON.parse(localStorage.getItem(STORAGE_VER + "session"));
  const authView = document.getElementById("authView");
  const studentDash = document.getElementById("studentDashboard");
  const adminDash = document.getElementById("adminDashboard");

  if (!session) {
    authView.classList.remove("hidden");
    studentDash.classList.add("hidden");
    adminDash.classList.add("hidden");
    return;
  }

  authView.classList.add("hidden");

  if (session.role === "student") {
    studentDash.classList.remove("hidden");
    adminDash.classList.add("hidden");
    renderStudentView(session);
    switchStudentTab("home"); // default tab
  } else if (session.role === "admin") {
    adminDash.classList.remove("hidden");
    studentDash.classList.add("hidden");
    renderAdminView();
  }
}

// Student View & Exact Module Cards
function renderStudentView(session) {
  const users = getStoredUsers();
  const currentUser = users.find(u => String(u.regNo) === String(session.regNo)) || { name: session.name, regNo: session.regNo, completedCourses: [] };

  document.getElementById("welcomeText").innerText = `Hi ${currentUser.name}!`;
  document.getElementById("studentDisplayName").innerText = currentUser.name;
  document.getElementById("studentMetaInfo").innerText = `Roll No: ${currentUser.regNo} | Department: Computer Science & Engineering`;

  const courses = getStoredCourses();
  const container = document.getElementById("coursesContainer");
  container.innerHTML = "";

  const completedList = (currentUser.completedCourses || []).map(Number);

  courses.forEach(c => {
    const isCompleted = completedList.includes(Number(c.id));
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <div class="card-top">
        <span class="card-badge">${c.category}</span>
        <h4>${c.title}</h4>
        <p>${c.description}</p>
      </div>
      <div class="card-footer">
        <span class="status-badge ${isCompleted ? 'completed' : 'pending'}">
          ${isCompleted ? '✅ Exam Passed' : '⏳ Ready for Study & Exam'}
        </span>
        <button class="btn-learn" onclick="openCourseModal(${c.id})">Open Study Module</button>
      </div>
    `;
    container.appendChild(card);
  });

  const total = courses.length;
  const passed = completedList.length;
  const pct = total > 0 ? Math.round((passed / total) * 100) : 0;

  document.getElementById("progressPercent").innerText = `${pct}%`;
  document.getElementById("progressBarFill").style.width = `${pct}%`;
  document.getElementById("progressFraction").innerText = `${passed} of ${total} Modules Certified`;
}

// Admin Panel View
function switchAdminSection(tab) {
  document.getElementById("adminTabUsersBtn").classList.toggle("active", tab === "users");
  document.getElementById("adminTabCoursesBtn").classList.toggle("active", tab === "courses");
  document.getElementById("adminSectionUsers").classList.toggle("hidden", tab !== "users");
  document.getElementById("adminSectionCourses").classList.toggle("hidden", tab !== "courses");
}

function renderAdminView() {
  const users = getStoredUsers();
  const courses = getStoredCourses();

  document.getElementById("metricStudents").innerText = users.length;
  document.getElementById("metricCourses").innerText = courses.length;
  let totalCompletions = 0;
  users.forEach(u => totalCompletions += (u.completedCourses ? u.completedCourses.length : 0));
  document.getElementById("metricCompletions").innerText = totalCompletions;

  const sTable = document.getElementById("studentTableBody");
  sTable.innerHTML = "";
  users.forEach(u => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><b>${u.regNo}</b></td>
      <td>${u.name}</td>
      <td>${u.dob}</td>
      <td>${u.completedCourses ? u.completedCourses.length : 0} passed</td>
      <td><button class="btn-del" onclick="deleteStudent('${u.regNo}')">Delete</button></td>
    `;
    sTable.appendChild(tr);
  });

  const cTable = document.getElementById("coursesTableBody");
  cTable.innerHTML = "";
  courses.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="card-badge">${c.category}</span></td>
      <td><b>${c.title}</b></td>
      <td><button class="btn-del" onclick="deleteCourse(${c.id})">Delete</button></td>
    `;
    cTable.appendChild(tr);
  });
}

function handleAddStudent(e) {
  e.preventDefault();
  const name = document.getElementById("newStudentName").value.trim();
  const regNo = document.getElementById("newStudentReg").value.trim();
  const dob = document.getElementById("newStudentDob").value;

  if (regNo.length !== 5) {
    alert("Register Number must be 5 digits!");
    return;
  }

  const users = getStoredUsers();
  if (users.some(u => String(u.regNo) === String(regNo))) {
    alert("Student already registered with this Reg No!");
    return;
  }

  users.push({ regNo, dob, name, completedCourses: [] });
  saveUsers(users);
  alert(`Student ${name} registered successfully!`);
  document.getElementById("addStudentForm").reset();
  renderAdminView();
}

function deleteStudent(regNo) {
  if (confirm(`Delete student Reg No: ${regNo}?`)) {
    let users = getStoredUsers();
    users = users.filter(u => String(u.regNo) !== String(regNo));
    saveUsers(users);
    renderAdminView();
  }
}

function handleAddCourse(e) {
  e.preventDefault();
  const courses = getStoredCourses();

  const newCourse = {
    id: Date.now(),
    title: document.getElementById("newCourseTitle").value.trim(),
    category: document.getElementById("newCourseCategory").value.trim(),
    description: document.getElementById("newCourseDesc").value.trim(),
    content: `<h3>Course Overview</h3><p>${document.getElementById("newCourseContent").value.replace(/\n/g, '<br>')}</p>`,
    quizzes: [
      {
        q: document.getElementById("newQuizQuestion").value.trim(),
        opts: document.getElementById("newQuizOptions").value.split(',').map(s => s.trim()),
        ans: parseInt(document.getElementById("newQuizAnswer").value),
        exp: "Correct answer configured by faculty."
      }
    ],
    labType: "logicLab"
  };

  courses.push(newCourse);
  saveCourses(courses);
  alert("Course published successfully!");
  document.getElementById("addCourseForm").reset();
  renderAdminView();
}

function deleteCourse(id) {
  if (confirm("Delete this course module?")) {
    let courses = getStoredCourses();
    courses = courses.filter(c => Number(c.id) !== Number(id));
    saveCourses(courses);
    renderAdminView();
  }
}

// Modal & Study Module
function openCourseModal(courseId) {
  const courses = getStoredCourses();
  activeCourse = courses.find(c => Number(c.id) === Number(courseId));
  if (!activeCourse) return;

  document.getElementById("modalCategory").innerText = activeCourse.category;
  document.getElementById("modalTitle").innerText = activeCourse.title;
  document.getElementById("modalBodyText").innerHTML = activeCourse.content;

  renderLab(activeCourse);

  testAnswers = {};
  currentTestQIndex = 0;
  renderTestStartCard();

  switchModalTab("theory");
  document.getElementById("courseModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("courseModal").classList.add("hidden");
}

function switchModalTab(tabName) {
  document.getElementById("modalTabTheory").classList.toggle("active", tabName === "theory");
  document.getElementById("modalTabLab").classList.toggle("active", tabName === "lab");
  document.getElementById("modalTabQuiz").classList.toggle("active", tabName === "quiz");

  document.getElementById("theoryTab").classList.toggle("hidden", tabName !== "theory");
  document.getElementById("labTab").classList.toggle("hidden", tabName !== "lab");
  document.getElementById("quizTab").classList.toggle("hidden", tabName !== "quiz");
}

// Simulators
function renderLab(course) {
  const labBox = document.getElementById("interactiveLabContainer");

  if (course.labType === "setLab") {
    labBox.innerHTML = `
      <div class="interactive-calc-box">
        <h4>⚡ Discrete Set Theory Operations Simulator</h4>
        <div style="display:flex; flex-wrap:wrap; gap:12px; margin: 15px 0;">
          <input type="text" id="setAInput" value="1, 2, 3, 4" style="flex:1; min-width:180px; padding:9px; border-radius:6px; border:1px solid #cbd5e1;" placeholder="Set A (e.g. 1, 2, 3)" />
          <input type="text" id="setBInput" value="3, 4, 5, 6" style="flex:1; min-width:180px; padding:9px; border-radius:6px; border:1px solid #cbd5e1;" placeholder="Set B (e.g. 3, 4, 5)" />
          <button class="btn-learn" onclick="calcSetOperations()">Compute</button>
        </div>
        <div id="setResultsOutput" style="background:#fff; padding:15px; border-radius:8px; border:1px solid #e2e8f0; line-height:1.9;"></div>
      </div>
    `;
    calcSetOperations();
  } else if (course.labType === "combLab") {
    labBox.innerHTML = `
      <div class="interactive-calc-box">
        <h4>⚡ Enumeration & Combinatorics Lab</h4>
        <div style="display:flex; gap:12px; margin: 15px 0; flex-wrap:wrap;">
          <div>
            <label style="font-size:0.8rem; font-weight:600;">Items (n):</label><br>
            <input type="number" id="combN" value="6" min="0" style="padding:8px; width:110px;" />
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:600;">Chosen (r):</label><br>
            <input type="number" id="combR" value="3" min="0" style="padding:8px; width:110px;" />
          </div>
          <div style="align-self:flex-end;">
            <button class="btn-learn" onclick="calcAdvancedComb()">Calculate</button>
          </div>
        </div>
        <div id="combResultsOutput" style="background:#fff; padding:15px; border-radius:8px; border:1px solid #e2e8f0; line-height:2;"></div>
      </div>
    `;
    calcAdvancedComb();
  } else {
    labBox.innerHTML = `
      <div class="interactive-calc-box">
        <h4>⚡ Live Truth Table Generator</h4>
        <div style="display:flex; gap:20px; margin:14px 0;">
          <label><b>Proposition P:</b> 
            <select id="selP" onchange="runLogicLab()" style="padding:6px; margin-left:5px;">
              <option value="1">True (T)</option>
              <option value="0">False (F)</option>
            </select>
          </label>
          <label><b>Proposition Q:</b> 
            <select id="selQ" onchange="runLogicLab()" style="padding:6px; margin-left:5px;">
              <option value="1">True (T)</option>
              <option value="0">False (F)</option>
            </select>
          </label>
        </div>
        <table class="table-custom">
          <thead>
            <tr>
              <th>P ∧ Q (AND)</th>
              <th>P ∨ Q (OR)</th>
              <th>P ⊕ Q (XOR)</th>
              <th>P → Q (Implication)</th>
              <th>¬P (Negation)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="labAnd">T</td>
              <td id="labOr">T</td>
              <td id="labXor">F</td>
              <td id="labImp">T</td>
              <td id="labNot">F</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
    runLogicLab();
  }
}

function runLogicLab() {
  const p = parseInt(document.getElementById("selP").value);
  const q = parseInt(document.getElementById("selQ").value);
  document.getElementById("labAnd").innerText = (p && q) ? "T" : "F";
  document.getElementById("labOr").innerText = (p || q) ? "T" : "F";
  document.getElementById("labXor").innerText = (p ^ q) ? "T" : "F";
  document.getElementById("labImp").innerText = (!p || q) ? "T" : "F";
  document.getElementById("labNot").innerText = (!p) ? "T" : "F";
}

function calcSetOperations() {
  const aRaw = document.getElementById("setAInput").value.split(',').map(s => s.trim()).filter(s => s !== "");
  const bRaw = document.getElementById("setBInput").value.split(',').map(s => s.trim()).filter(s => s !== "");
  const setA = Array.from(new Set(aRaw));
  const setB = Array.from(new Set(bRaw));

  const union = Array.from(new Set([...setA, ...setB]));
  const intersection = setA.filter(x => setB.includes(x));
  const diffAB = setA.filter(x => !setB.includes(x));

  const out = document.getElementById("setResultsOutput");
  out.innerHTML = `
    <div><b>Union (A ∪ B):</b> { ${union.join(", ") || "∅"} }</div>
    <div><b>Intersection (A ∩ B):</b> { ${intersection.join(", ") || "∅"} }</div>
    <div><b>Difference (A - B):</b> { ${diffAB.join(", ") || "∅"} }</div>
    <div><b>Power Set Cardinality |P(A)|:</b> 2^${setA.length} = <b>${Math.pow(2, setA.length)}</b> subsets</div>
  `;
}

function fact(n) {
  if (n < 0) return 0;
  return n <= 1 ? 1 : n * fact(n - 1);
}

function calcAdvancedComb() {
  const n = parseInt(document.getElementById("combN").value);
  const r = parseInt(document.getElementById("combR").value);

  if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
    alert("Make sure n >= r >= 0");
    return;
  }

  const pVal = fact(n) / fact(n - r);
  const cVal = fact(n) / (fact(r) * fact(n - r));

  const out = document.getElementById("combResultsOutput");
  out.innerHTML = `
    <div><b>P(${n}, ${r}):</b> ${pVal.toLocaleString()} arrangements</div>
    <div><b>C(${n}, ${r}):</b> ${cVal.toLocaleString()} combinations</div>
  `;
}

// Assessment UI & Logic
function renderTestStartCard() {
  const quizTab = document.getElementById("quizTab");
  quizTab.innerHTML = `
    <div class="test-start-card">
      <span style="font-size:2.8rem;">📝</span>
      <h3>15-MCQ Module Examination</h3>
      <p>Evaluate your mastery in <b>${activeCourse.title}</b>.</p>
      <ul style="max-width:380px; margin: 0 auto 20px auto; text-align:left; font-size:0.9rem; color:#475569;">
        <li>Total Questions: <b>15 MCQs</b></li>
        <li>Passing Score: <b>60% (Minimum 9 / 15)</b></li>
      </ul>
      <button class="btn-submit" style="max-width:280px; margin:auto;" onclick="startAssessment()">Take Assessment Test 🚀</button>
    </div>
  `;
}

function startAssessment() {
  testAnswers = {};
  currentTestQIndex = 0;
  renderTestQuestionUI();
}

function renderTestQuestionUI() {
  const quizTab = document.getElementById("quizTab");
  const questions = activeCourse.quizzes;
  const q = questions[currentTestQIndex];

  let paletteHTML = "";
  questions.forEach((_, idx) => {
    const isAnswered = testAnswers.hasOwnProperty(idx);
    const isCurrent = idx === currentTestQIndex;
    paletteHTML += `
      <button class="palette-btn ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : ''}" onclick="jumpToQuestion(${idx})">
        ${idx + 1}
      </button>
    `;
  });

  let optionsHTML = "";
  q.opts.forEach((optText, optIdx) => {
    const isChecked = testAnswers[currentTestQIndex] === optIdx;
    optionsHTML += `
      <div class="test-option-item ${isChecked ? 'selected' : ''}" onclick="selectTestOption(${optIdx})">
        <input type="radio" name="testRadio" ${isChecked ? 'checked' : ''} />
        <span><b>${String.fromCharCode(65 + optIdx)}.</b> ${optText}</span>
      </div>
    `;
  });

  quizTab.innerHTML = `
    <div class="test-layout">
      <div class="test-question-box">
        <div class="test-q-meta">
          <span>Question ${currentTestQIndex + 1} of ${questions.length}</span>
          <span>${activeCourse.category}</span>
        </div>
        <div class="test-q-title">${q.q}</div>
        <div class="test-options-list">${optionsHTML}</div>
        
        <div class="test-nav-controls">
          <button class="btn-learn" style="background:#64748b;" ${currentTestQIndex === 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''} onclick="prevTestQuestion()">⬅️ Previous</button>
          ${currentTestQIndex + 1 < questions.length 
            ? `<button class="btn-learn" onclick="nextTestQuestion()">Next ➡️</button>` 
            : `<button class="btn-learn" style="background:#16a34a;" onclick="submitFullAssessment()">Submit Final Test 🏁</button>`
          }
        </div>
      </div>

      <div class="test-palette-box">
        <h4 style="text-align:center; font-size:0.9rem; margin-bottom:12px;">Question Navigator</h4>
        <div class="palette-grid">${paletteHTML}</div>
        <div style="margin-top:15px; text-align:center;">
          <small style="color:#64748b;">Answered: <b>${Object.keys(testAnswers).length}</b> / ${questions.length}</small>
        </div>
      </div>
    </div>
  `;
}

function selectTestOption(optIdx) {
  testAnswers[currentTestQIndex] = optIdx;
  renderTestQuestionUI();
}

function nextTestQuestion() {
  if (currentTestQIndex + 1 < activeCourse.quizzes.length) {
    currentTestQIndex++;
    renderTestQuestionUI();
  }
}

function prevTestQuestion() {
  if (currentTestQIndex > 0) {
    currentTestQIndex--;
    renderTestQuestionUI();
  }
}

function jumpToQuestion(idx) {
  currentTestQIndex = idx;
  renderTestQuestionUI();
}

// Test Submission & Passing Score Update
function submitFullAssessment() {
  const questions = activeCourse.quizzes;
  const answeredCount = Object.keys(testAnswers).length;

  if (answeredCount < questions.length) {
    if (!confirm(`You answered ${answeredCount} of ${questions.length} questions. Submit anyway?`)) {
      return;
    }
  }

  let correctCount = 0;
  let reviewHTML = "";

  questions.forEach((q, idx) => {
    const userChoice = testAnswers[idx];
    const isCorrect = userChoice === q.ans;
    if (isCorrect) correctCount++;

    reviewHTML += `
      <div class="review-item ${isCorrect ? 'pass' : 'fail'}">
        <p><b>Q${idx + 1}: ${q.q}</b></p>
        <p>Your Answer: <b>${userChoice !== undefined ? q.opts[userChoice] : "Not Attempted"}</b> ${isCorrect ? '✅' : '❌'}</p>
        ${!isCorrect ? `<p style="color:#16a34a;">Correct Answer: <b>${q.opts[q.ans]}</b></p>` : ''}
        <small style="color:#475569; display:block; margin-top:4px;"><b>Explanation:</b> ${q.exp}</small>
      </div>
    `;
  });

  const percentage = Math.round((correctCount / questions.length) * 100);
  const passed = percentage >= 60;

  // Save to Student Profile
  const session = JSON.parse(localStorage.getItem(STORAGE_VER + "session"));
  if (passed && session && session.role === "student") {
    const users = getStoredUsers();
    const student = users.find(u => String(u.regNo) === String(session.regNo));
    if (student) {
      if (!student.completedCourses) student.completedCourses = [];
      const courseId = Number(activeCourse.id);
      if (!student.completedCourses.map(Number).includes(courseId)) {
        student.completedCourses.push(courseId);
        saveUsers(users);
      }
    }
    renderStudentView(session);
  }

  const quizTab = document.getElementById("quizTab");
  quizTab.innerHTML = `
    <div class="scorecard-box">
      <span style="font-size:3rem;">${passed ? '🏆' : '📚'}</span>
      <h2 style="color:${passed ? '#15803d' : '#b91c1c'}; margin-top:10px;">
        ${passed ? 'Module Certified & Passed!' : 'Requires Revision'}
      </h2>
      <div class="scorecard-metric">${correctCount} / ${questions.length}</div>
      <p style="font-size:1.1rem; color:#475569;">Accuracy: <b>${percentage}%</b> (Passing mark: 60%)</p>
      
      <div style="margin:20px 0;">
        <button class="btn-learn" onclick="handleRetakeTest()">Retake Assessment 🔄</button>
      </div>

      <h3 style="margin-top:25px; text-align:left; color:#0f172a;">Detailed Question-wise Analysis:</h3>
      <div class="review-answers-box">${reviewHTML}</div>
    </div>
  `;
}

function handleRetakeTest() {
  const session = JSON.parse(localStorage.getItem(STORAGE_VER + "session"));
  if (session && session.role === "student" && activeCourse) {
    const users = getStoredUsers();
    const student = users.find(u => String(u.regNo) === String(session.regNo));
    if (student && student.completedCourses) {
      const courseId = Number(activeCourse.id);
      student.completedCourses = student.completedCourses.filter(id => Number(id) !== courseId);
      saveUsers(users);
      renderStudentView(session);
    }
  }
  startAssessment();
}

// Bootstrap
window.onload = renderApp;

// ================= FLOATING AI ASSISTANT ENGINE =================
function toggleAIChat() {
  const chatBox = document.getElementById("aiChatBox");
  chatBox.classList.toggle("hidden");
  if (!chatBox.classList.contains("hidden")) {
    document.getElementById("aiUserInput").focus();
  }
}

function sendQuickPrompt(promptText) {
  document.getElementById("aiUserInput").value = promptText;
  handleAIChatSubmit(new Event('submit'));
}

function handleAIChatSubmit(e) {
  e.preventDefault();
  const inputElem = document.getElementById("aiUserInput");
  const userText = inputElem.value.trim();
  if (!userText) return;

  // Append user message
  appendAIMessage(userText, "user");
  inputElem.value = "";

  // Bot typing simulation & response
  setTimeout(() => {
    const botResponse = generateAIResponse(userText.toLowerCase());
    appendAIMessage(botResponse, "bot");
  }, 400);
}

function appendAIMessage(text, sender) {
  const msgContainer = document.getElementById("aiChatMessages");
  const msgDiv = document.createElement("div");
  msgDiv.className = `ai-msg ${sender}`;
  msgDiv.innerHTML = text.replace(/\n/g, "<br>");
  msgContainer.appendChild(msgDiv);
  msgContainer.scrollTop = msgContainer.scrollHeight;
}

// Smart NLP-based response system for math & website guide
function generateAIResponse(query) {
  // 1. Website Navigation & Features
  if (query.includes("website") || query.includes("guide") || query.includes("features") || query.includes("help") || query.includes("enna pannanum")) {
    return "Namma <b>Discrete LMS Website</b>-la 3 main sections irukku:<br>1. <b>Home Tab:</b> Overview & syllabus details.<br>2. <b>Modules Tab:</b> Unit 1 (Logic), Unit 2 (Sets), Unit 3 (Combinatorics). Ovvoru module-kullayum Theory, Live Simulator Lab, and 15-MCQ Assessment irukku.<br>3. <b>About Tab:</b> Course objectives and details.";
  }
  
  if (query.includes("pass") || query.includes("mark") || query.includes("percentage") || query.includes("criteria")) {
    return "Assessment pass panna <b>60% minimum score</b> venum (adhavaadhu 15 MCQs-la minimum <b>9 questions correct-aa</b> irukkanum). Pass aana udaney dashboard-la <b>'✅ Exam Passed'</b> (Green colour) aagi progress bar increase aagum!";
  }

  if (query.includes("retake") || query.includes("reset") || query.includes("thirumba")) {
    return "Oru module assessment mudichittu <b>'Retake Assessment 🔄'</b> button click pannina, antha module thirumba <b>'⏳ Ready for Study & Exam'</b> (orange colour)-kum progress 0%-kum reset aagidum. Neenga thirumba fresh-aa test ezhudhalaam.";
  }

  if (query.includes("lab") || query.includes("simulator") || query.includes("tool")) {
    return "Namma website-la ovvoru module-kullayum <b>'Live Simulator / Lab'</b> tab irukku:<br>• <b>Unit 1:</b> Truth Table Calculator (P & Q connectives).<br>• <b>Unit 2:</b> Set Operations Solver (Union, Intersection, Power Set).<br>• <b>Unit 3:</b> Permutations (nPr) & Combinations (nCr) Solver.";
  }

  // 2. Discrete Mathematics Doubts
  if (query.includes("de morgan") || query.includes("demorgan")) {
    return "<b>De Morgan's Laws:</b><br>1. ¬(P ∧ Q) ≡ ¬P ∨ ¬Q<br>2. ¬(P ∨ Q) ≡ ¬P ∧ ¬Q<br><i>Artham:</i> Conjunction-oda negation disjunction-oda individual negations-ku samam.";
  }

  if (query.includes("modus ponens") || query.includes("ponens")) {
    return "<b>Modus Ponens (Rule of Detachment):</b><br>Premises: <code>P</code> and <code>P → Q</code><br>Conclusion: <code>Q</code><br>Udaharanam: 'Mazhai peydha tharai eeram aagum (P → Q)'. Mazhai peydhadhu (P). Enave, tharai eeram aagiyadhu (Q).";
  }

  if (query.includes("modus tollens") || query.includes("tollens")) {
    return "<b>Modus Tollens:</b><br>Premises: <code>¬Q</code> and <code>P → Q</code><br>Conclusion: <code>¬P</code>";
  }

  if (query.includes("tautology") || query.includes("contradiction")) {
    return "• <b>Tautology:</b> Ella truth values-um eppovum <b>True</b>-nu irundha adhu Tautology (e.g., P ∨ ¬P).<br>• <b>Contradiction:</b> Ella values-um eppovum <b>False</b>-nu irundha adhu Contradiction (e.g., P ∧ ¬P).";
  }

  if (query.includes("pigeonhole") || query.includes("php")) {
    return "<b>Pigeonhole Principle:</b><br>If <i>k + 1</i> items-ah <i>k</i> boxes-la potta, kandippa yedhavadhu oru box-la 2 or more items irukkum.<br><b>Formula:</b> <code>⌈ N / k ⌉</code>.";
  }

  if (query.includes("poset") || query.includes("partial order")) {
    return "<b>Poset (Partial Order Set):</b><br>Oru relation <b>Reflexive, Antisymmetric, and Transitive</b> aagi irundha adhu Poset.";
  }

  if (query.includes("lattice")) {
    return "<b>Lattice:</b><br>Oru Poset-la irukura ovvoru pair-kum unique <b>LUB (Join ∨)</b> and <b>GLB (Meet ∧)</b> irundha adhu Lattice aagum.";
  }

  if (query.includes("permutation") || query.includes("combination") || query.includes("npr") || query.includes("ncr")) {
    return "• <b>Permutation (Order matters):</b> <code>P(n, r) = n! / (n - r)!</code><br>• <b>Combination (Order doesn't matter):</b> <code>C(n, r) = n! / [r! (n - r)!]</code>";
  }

  if (query.includes("power set") || query.includes("subset")) {
    return "<b>Power Set P(S):</b><br>Oru set-oda ella subsets-um serndhadhu. If set size is <code>n</code>, total subsets in Power Set = <code>2ⁿ</code>.";
  }

  // Fallback default helpful answer
  return "Kandippa! Naan ungalukku Discrete Mathematics (Logic, Set Theory, Combinatorics) mattrum namma website LMS features (Modules, Labs, Assessments) pathina doubts-ku help panna ready-aa irukken. Konjam theliva oru specific topic or question kelunga!";
}
