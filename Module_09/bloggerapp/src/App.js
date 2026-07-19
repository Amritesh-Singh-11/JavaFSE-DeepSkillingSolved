import React, { useState } from 'react';

/* STREAMING_CHUNK: Exporting books dataset as specified in the screenshots... */
// Dataset exactly matching image_96b7c8.png
export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

// Course list data matching image_96b4ff.png
export const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React', date: '6/3/20201' }
];

// Blog list data matching image_96b4ff.png
export const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', body: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', body: 'You can install React from npm.' }
];

/* STREAMING_CHUNK: Setting up modular conditional sub-renderers... */

// 1. CourseDetails rendering using a separate helper component
function CourseDetails(props) {
  // Method 1: Conditional Rendering using explicit if-else / Element Variables
  let courseContent;
  if (!props.courses || props.courses.length === 0) {
    courseContent = <p>No courses available at this moment.</p>;
  } else {
    courseContent = (
      <div>
        {props.courses.map((course) => (
          <div key={course.id} style={{ marginBottom: '25px' }}>
            <h2 style={{ fontSize: '1.8rem', margin: '0 0 5px 0', color: '#1e293b' }}>{course.name}</h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>{course.date}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {courseContent}
    </div>
  );
}

// 2. BookDetails rendering component (Uses props matching image_96b505.png)
function BookDetails(props) {
  // Method 2: Conditional rendering using a Ternary operator
  const hasBooks = props.books && props.books.length > 0;

  // Exact structure requested in image_96b505.png
  const bookdet = hasBooks ? (
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      {props.books.map((book) => (
        <div key={book.id} style={{ marginBottom: '25px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0 0 5px 0' }}>{book.bname}</h3>
          <h4 style={{ fontWeight: 'normal', color: '#475569', margin: 0 }}>{book.price}</h4>
        </div>
      ))}
    </ul>
  ) : (
    <p>No books are available for purchase.</p>
  );

  return (
    <div>
      {bookdet}
    </div>
  );
}

// 3. BlogDetails component
function BlogDetails(props) {
  const hasBlogs = props.blogs && props.blogs.length > 0;

  // Method 3: Conditional Rendering via Logical AND (&&) short-circuit
  const content = (
    <div>
      {hasBlogs && props.blogs.map((blog) => (
        <div key={blog.id} style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '1.8rem', margin: '0 0 5px 0', color: '#0f172a' }}>{blog.title}</h2>
          
          {/* Conditionally display author if field is present using logical AND */}
          {blog.author && (
            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#334155' }}>
              {blog.author}
            </p>
          )}

          {/* Conditionally display blog content if field is present */}
          {blog.body && (
            <p style={{ color: '#475569', fontSize: '1.1rem', margin: 0 }}>
              {blog.body}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {content}
    </div>
  );
}

/* STREAMING_CHUNK: Creating the primary App router dashboard... */
export default function App() {
  // State elements to demonstrate conditional rendering interactively
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  // Switch-case display controller state
  const [activeTab, setActiveTab] = useState('all');

  // Method 4: Switch-case conditional component selector function
  const renderSelectedSection = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Course Details Only</h1>
            <CourseDetails courses={courses} />
          </div>
        );
      case 'books':
        return (
          <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '8px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Book Details Only</h1>
            <BookDetails books={books} />
          </div>
        );
      case 'blogs':
        return (
          <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Blog Details Only</h1>
            <BlogDetails blogs={blogs} />
          </div>
        );
      case 'all':
      default:
        // Double wrapper matching st2, v1, and mystyle1 mappings in image_96b7ac.png
        return (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            maxWidth: '1200px',
            margin: '40px auto',
            gap: '20px'
          }}>
            {/* Left Column: Course Details */}
            {showCourses && (
              <div className="mystyle1" style={{ flex: 1, padding: '20px', minWidth: '250px' }}>
                <h1 style={{ fontSize: '2.2rem', marginBottom: '30px', color: '#000000', fontWeight: 'bold' }}>
                  Course Details
                </h1>
                <CourseDetails courses={courses} />
              </div>
            )}

            {/* Thick Green Splitter Bar (Conditional) */}
            {showCourses && showBooks && (
              <div style={{ width: '4px', alignSelf: 'stretch', backgroundColor: 'green', margin: '0 10px' }}></div>
            )}

            {/* Middle Column: Book Details */}
            {showBooks && (
              <div className="st2" style={{ flex: 1, padding: '20px', minWidth: '250px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.2rem', marginBottom: '30px', color: '#000000', fontWeight: 'bold' }}>
                  Book Details
                </h1>
                <BookDetails books={books} />
              </div>
            )}

            {/* Thick Green Splitter Bar (Conditional) */}
            {showBooks && showBlogs && (
              <div style={{ width: '4px', alignSelf: 'stretch', backgroundColor: 'green', margin: '0 10px' }}></div>
            )}

            {/* Right Column: Blog Details */}
            {showBlogs && (
              <div className="v1" style={{ flex: 1, padding: '20px', minWidth: '250px' }}>
                <h1 style={{ fontSize: '2.2rem', marginBottom: '30px', color: '#000000', fontWeight: 'bold' }}>
                  Blog Details
                </h1>
                <BlogDetails blogs={blogs} />
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
      
      {/* Interactive Controls Panel (Added for demonstrating Conditional Rendering capabilities) */}
      <div style={{
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto 30px auto',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#334155' }}>🔧 Conditional Rendering Controls (Lab Verification Panel)</h3>
        
        {/* Row 1: Visibility Toggles */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
          <button 
            onClick={() => setShowCourses(!showCourses)}
            style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', cursor: 'pointer', background: showCourses ? '#dcfce7' : '#fee2e2' }}
          >
            Toggle Courses (If-Else): {showCourses ? 'ON' : 'OFF'}
          </button>
          
          <button 
            onClick={() => setShowBooks(!showBooks)}
            style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', cursor: 'pointer', background: showBooks ? '#dcfce7' : '#fee2e2' }}
          >
            Toggle Books (Ternary): {showBooks ? 'ON' : 'OFF'}
          </button>
          
          <button 
            onClick={() => setShowBlogs(!showBlogs)}
            style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', cursor: 'pointer', background: showBlogs ? '#dcfce7' : '#fee2e2' }}
          >
            Toggle Blogs (Logical &&): {showBlogs ? 'ON' : 'OFF'}
          </button>
        </div>

        {/* Row 2: Layout Selectors (Switch-Case Demonstration) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'bold' }}>Switch Case Layout:</span>
          {['all', 'courses', 'books', 'blogs'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeTab === tab ? '#1e293b' : '#cbd5e1',
                color: activeTab === tab ? '#ffffff' : '#000000',
                textTransform: 'capitalize'
              }}
            >
              {tab} View
            </button>
          ))}
        </div>
      </div>

      {/* Render selected layout based on switch-case logic state */}
      <div>
        {renderSelectedSection()}
      </div>

    </div>
  );
}