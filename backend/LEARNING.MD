# 📗 LEARNING.md — My Personal Notes & Journey

This file is a **living journal** of everything I learned, explored, and brainstormed while building the **Synapse Backend**.  
It acts as my **personal knowledge base** and reflection point for future projects.  

---

## 📚 Key Learnings
- 🛣️ Using `express.Router()` to modularize routes instead of bloating `app.js`.
- 🗂️ Difference between keeping logic in **routes** vs moving them into **controllers**.
- 🧩 Mongoose `{ _id: false }` option to prevent unnecessary IDs in sub-schemas.
- 🌐 Why `process.env.PORT || 8080` matters for **cloud deployments**.
- ⚙️ How middlewares can be applied **globally** or only for **specific routes**.
- 🗺️ Using Mongoose Map type to store dynamic key-value pairs like { "python": 0.9, "react": 0.65 }.
- ✅ Learned how to use **Mongoose `validate` and `validator`** for custom validation:
  - `validate` can be a function (e.g., checking if an array is non-empty).
  - `validator` allows more complex logic with custom error messages.
  - Example:  
    ```js
    skills: {
      type: [String],
      validate: {
        validator: arr => arr.length > 0,
        message: "At least one skill is required!"
      }
    }
    ```

---

## 🔄 Approaches Explored
1. **Folder Structure**  
   - Flat → ❌ messy, not scalable  
   - Modular → ✅ clean, future-proof → I chose this  

2. **Authentication**  
   - Sessions → ❌ requires server-side storage  
   - JWT → ✅ stateless, scalable → I implemented this  

3. **Database**  
   - SQL → ❌ rigid schemas  
   - MongoDB → ✅ flexible with nested objects → my choice  

4. **Route Handling**  
   - Inline logic → ❌ hard to maintain  
   - Controllers → ✅ clear separation of concerns → I went with this  

5. **Dynamic Skill Storage**  
   - Plain objects {} → ❌ lacks schema awareness & Map methods  
   - Mongoose Map type → ✅ provides .set(), .get(), .delete(), easy to persist → I chose this  

6. **Validation Logic**  
   - Required + basic type checking → ❌ limited control  
   - Custom validators → ✅ precise, human-readable errors → now using this

---

## 🧠 Brainstorming Notes
- Started with **all routes in `app.js`** → quickly became unmanageable.  
- Considered giving sub-schemas their own `_id` → realized it cluttered data → used `{ _id: false }`.  
- Explored deployment platforms → **Google Cloud**, **Heroku**, **Vercel**, and **AWS**.  
- Thought about storing skills as an array → but updating/deleting would be clunky → switched to Map type.  
- For **validation**, realized built-in checks (like `required: true`) aren’t always enough.  
  - Example: required arrays can still be empty.  
  - Solved this with `validate: { validator: fn, message: "..." }`.

---

## ⚡ Challenges & Solutions
- **Extra `_id` fields in nested objects** → fixed with `{ _id: false }`.  
- **CORS errors** connecting frontend → solved using `cors` middleware.  
- **Server crash on missing `PORT`** → prevented by `process.env.PORT || 8080`.  
- **Authentication & route protection** → built `auth.middleware.js` to validate JWT tokens.  
- **Updating skills dynamically** → solved by using Mongoose Map:
  - .set("python", 0.9) to insert/update  
  - .get("python") to read  
  - .delete("react") to remove  
- **Empty arrays still passing `required: true`** → solved with custom validator to enforce non-empty arrays.

---

## 🚀 Future Learning Goals
- 🧪 Add automated testing with **Jest/Mocha**.  
- 📘 Explore **TypeScript** for type safety.  
- 📝 Improve logging with **Winston/Morgan**.  
- 📖 Generate proper API docs with **Swagger/OpenAPI**.  
- 🌱 Experiment with skill progression tracking (timestamps, history of updates).  
- 🔍 Explore advanced Mongoose validations (async validators, conditional validations).

---

## 📝 Personal Reflection
Building this project taught me:  
- How to **design and structure** a real-world backend.  
- The importance of **clean code & scalability**.  
- That documenting not just *what I built*, but also *why I built it*, makes learning much deeper.  
- How Mongoose Map gave me a scalable way to store dynamic user skills without rigid schemas.  
- How **validators** give me better control over data quality, beyond just `required`.

---

## 📊 Example Data (Map + Validation in action)
```json
"hard_skills": {
  "python": 0.9,
  "javascript": 0.75,
  "git": 0.6
}

"skills": ["python", "javascript"] // validator ensures array is not empty
