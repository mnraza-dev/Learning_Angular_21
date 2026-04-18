# 🚀 Angular 21

A beginner-friendly guide covering core Angular concepts, CLI usage, and basic features to get started quickly.

---

## 📌 Table of Contents

* 1. Interpolation
* 2. Angular CLI
* 3. 
* 4. 
* 5. 

---

## 🔹 1. Interpolation

Interpolation is a fundamental Angular concept used to bind data from your component (TypeScript) to your template (HTML).

### ✅ Syntax:

```html
{{ expression }}
```

### 📌 Example:

```ts
export class AppComponent {
  title = 'Angular 21 App';
}
```

```html
<h1>{{ title }}</h1>
```

👉 Output:

```
Angular 21 App
```

### 💡 Key Points:

* Used for displaying dynamic data
* Supports expressions (not statements)
* One-way data binding

---

## 🔹 2. Angular CLI

Angular CLI (Command Line Interface) helps you create, manage, and build Angular applications efficiently.

### 🛠️ Installation:

```bash
npm install -g @angular/cli
```

---

## 🔹 3. Project Setup

### 📦 Create a New Project

```bash
ng new <project-name>
```

### 📁 Navigate to Project Folder

```bash
cd <project-name>
```

### 📌 Generate Component

```bash
ng generate component <component-name>
```

### 📌 Generate Service

```bash
ng generate service <service-name>
```

### 📌 Generate Pipe

```bash
ng generate pipe <pipe-name>
```

👉 Short aliases:

```bash
ng g c <component-name>
ng g s <service-name>
ng g p <pipe-name>
```

### ▶️ Start Development Server

```bash
ng serve
```

### 🌐 Open in Browser

```
http://localhost:4200
```

---

### 📊 Check Angular Version

```bash
ng version
```

### 📖 Get Help

```bash
ng help
```

---

## 🎯 Summary

* Interpolation allows dynamic data binding in templates
* Angular CLI simplifies development workflow
* Use CLI commands to generate components, services, and more
* Run applications locally using `ng serve`

---

## 🧑‍💻 Author

Maintained by **mnraza-dev**

---

## ⭐ Support

If you found this helpful, consider giving the repository a ⭐ on GitHub!
