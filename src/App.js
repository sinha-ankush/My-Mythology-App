import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import Myth from "./pages/Myth";
import Temple from "./pages/Temple";
import Char from "./pages/Char";
import Fest from "./pages/Fest";
import Episodes from "./pages/Episodes";
import Story from "./pages/Story";
import Temp_Story from "./pages/Temp_Story";
import Fest_Story from "./pages/Fest_Story";
import Char_Story from "./pages/Char_Story";
import Contact from "./pages/Contact";
import About from "./pages/About";
import WriteStory from "./pages/WriteStory";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./pages/Admin";
import ProfilePage from "./pages/ProfilePage";
import PEditPage from "./pages/PEditPage";
import { Suspense } from "react";
import Search from "./pages/Search";
import AdminView from "./components/AdminView";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <BrowserRouter>
      {/* adding react helmet for meta tags for seo optimization */}
      <Helmet>
        <title>PoojaArchana</title>
        <meta
          name="description"
          content="Get stats about every mythology content from all mthylogical indian culture"
        />
        <meta name="keywords" content="Mythology, God, Pooja" />
      </Helmet>

      <Toaster position="top-center" reverseOrder={false} />
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search-result" element={<Search />} />

          <Route path="/mythological-stories" element={<Myth />} />

          {/* <Route path='/mythological-stories/episodes/:id' element={<Episodes />} />

        <Route path='/mythological-stories/episodes/story/:id' element={<Story />} /> */}

          <Route path="/temples" element={<Temple />} />

          {/* <Route path='/temples/{1}' element={<Temp_Story />} /> */}

          <Route path="/characters" element={<Char />} />

          {/* <Route path='/characters/{1}' element={<Char_Story />} /> */}

          <Route path="/festivals" element={<Fest />} />

          {/* <Route path='/festivals/{1}' element={<Fest_Story />} /> */}

          <Route path="/contact-us" element={<Contact />} />

          <Route path="/about-us" element={<About />} />

          <Route path="/admin" element={<Admin />} />

          <Route
            path="/admin/view-content/:storyPostid"
            element={<AdminView />}
          />

          <Route path="/user" element={<PrivateRoute />}>
            <Route path="write-story" element={<WriteStory />} />

            <Route path="profile" element={<ProfilePage />} />

            <Route path="edit-profile" element={<PEditPage />} />

            <Route
              path="mythological-stories/episodes/:id"
              element={<Episodes />}
            />

            <Route
              path="mythological-stories/episodes/story/:id"
              element={<Story />}
            />

            <Route path="temples/story/:id" element={<Temp_Story />} />

            <Route path="characters/story/:id" element={<Char_Story />} />

            <Route path="festivals/story/:id" element={<Fest_Story />} />

            <Route path="write-story" element={<WriteStory />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
