# Song Off

# Introduction

"Song Off" is a site where people come to support their favourite artists by voting on their favourite song of the week. The top 50 songs of each week are shown on a leaderboard along with how many people voted for each respective song. 
To accompany the top songs of each week, there is a Spotify Playlist linked in the footer of the page that automatically updates to reflect the top 50 songs of the week.

# Tech Stack

**Frontend**: React
    - react-router-dom
    - react-icons

**Backend**: Node.js / Express

## What I’ve Learned So Far

1. **Setting up a proper React project structure**
   - Organizing files into `components`, `pages`, `layouts`, and `assets`.

2. **Constructing pages using modular components**
   - Pages are composed of reusable components.
   - This keeps components modular while preventing `App.js` from becoming cluttered.

3. **Implementing client-side routing with `react-router-dom`**
   - Using `BrowserRouter`, `Routes`, `Route`, and `Link` for navigation.

4. **Using layouts and the `Outlet` component**
   - Implementing child routes within a layout component.
   - Applying layout-specific structure and styling to groups of routes.
  
5. **Using Declarative design rather than Imperative**
   - Using declarative design helps to abstract away low-level DOM manipulation

6. **Using sesion storage to store commonly used data**

7. **Implementing client-side DB endpoints with `Supabase`**
    - Supabase uses RLS, so client-side DB logic/endpoints are secured and restricted to only that user

8. **Creating custom hooks**
    - Created a custom hook for protecting pages that require authentication
  
9. **How to handle different states and implement conditional rendering**
    - Ternary operator





