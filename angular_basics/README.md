# 🚀 Angular 21 Guide

A beginner-friendly guide covering core Angular concepts, CLI usage, and basic features to get started quickly.

---

## 📌 Table of Contents

* 1. Interpolation
* 2. Angular CLI
* 3. Components
* 4. Event Binding

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

## 🔹 3. Components

Components are the building blocks of an Angular application. Each component controls a part of the UI and consists of:

* HTML template (view)
* TypeScript class (logic)
* CSS/SCSS (styling)

### Key Concepts
- Reusable → You can use the same component multiple times
- Encapsulated → Each component has its own logic and style
- Modular → Break large UI into small manageable pieces

👉 Components in Angular are reusable UI building blocks that combine template, logic, and styles to control a specific part of the application.

### 📌 Basic Component Structure

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  message = 'Hello from Component!';
}
```

### 📌 Template Example

```html
<h2>{{ message }}</h2>
```

### 💡 Key Points:

* Components are reusable
* Each component has its own scope
* Defined using `@Component` decorator

---

## 🔹 4. Project Setup

### 📦 Create a New Project

```bash
ng new <project-name>
```

### 📁 Navigate to Project Folder

```bash
cd <project-name>
```

---

## 🔹 4. Generate Components & Services

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

---

## 🔹 5. Running the Application

### ▶️ Start Development Server

```bash
ng serve
```

### 🌐 Open in Browser

```
http://localhost:4200
```

---

## 🔹 6. Useful Commands

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

## 💡 Next Steps

* Learn Data Binding (Property, Event, Two-way)
* Understand Components & Lifecycle Hooks
* Explore Services & Dependency Injection
* Work with Routing and HTTP Client

---

## 🧑‍💻 Author

Maintained by **mnraza-dev**

---

## ⭐ Support

If you found this helpful, consider giving the repository a ⭐ on GitHub!
