import React, { Component } from 'react';
import Post from './Post'; // Importing the ES6 Post model class

// A small interactive component designed to trigger an error so we can test componentDidCatch
class BuggyButton extends Component {
  state = { releaseBug: false };

  handleClick = () => {
    this.setState({ releaseBug: true });
  };

  render() {
    if (this.state.releaseBug) {
      throw new Error('Simulated rendering crash! The Error Boundary caught this successfully.');
    }
    return (
      <button 
        onClick={this.handleClick}
        style={{
          backgroundColor: '#ef4444',
          color: '#ffffff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '0.875rem',
          transition: 'background-color 0.2s',
          marginTop: '10px'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
      >
        Simulate Rendering Error
      </button>
    );
  }
}

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null,
      hasRuntimeError: false,
      runtimeErrorMessage: ''
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to retrieve blog posts from API');
        }
        return response.json();
      })
      .then((data) => {
        const structuredPosts = data.slice(0, 9).map(
          (item) => new Post(item.id, item.title, item.body, item.userId)
        );
        this.setState({ posts: structuredPosts, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      hasRuntimeError: true,
      runtimeErrorMessage: error.toString()
    });
  }

  render() {
    const { posts, loading, error, hasRuntimeError, runtimeErrorMessage } = this.state;

    // Define spinner animation styles as a Javascript object for cleaner rendering
    const spinnerStyle = {
      display: 'inline-block',
      width: '40px',
      height: '40px',
      border: '4px solid #cbd5e1',
      borderTopColor: '#3b82f6',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '15px'
    };

    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Injecting keyframes via a style tag once in the root is cleaner */}
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          marginBottom: '30px',
          borderBottom: '2px solid #f1f5f9',
          paddingBottom: '20px'
        }}>
          <div>
            <h2 style={{ color: '#0f172a', margin: '0 0 5px 0', fontSize: '1.75rem' }}>Dynamic Blog Dashboard</h2>
            <p style={{ color: '#64748b', margin: 0 }}>Demonstrating Component Lifecycle & Error Handling</p>
          </div>
          <div>
            <BuggyButton />
          </div>
        </div>

        {hasRuntimeError && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fca5a5',
            color: '#991b1b',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '30px',
            fontSize: '0.95rem',
            lineHeight: '1.5'
          }}>
            <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '5px' }}>⚠️ Lifecycle Alert: Component Error Intercepted!</strong>
            <p style={{ margin: '0 0 10px 0' }}>The application has successfully bypassed a crash using the <code>componentDidCatch()</code> lifecycle method. </p>
            <code style={{ background: '#fee2e2', padding: '4px 8px', borderRadius: '4px', wordBreak: 'break-all' }}>{runtimeErrorMessage}</code>
          </div>
        )}

        {error && (
          <div style={{
            backgroundColor: '#fffbeb',
            border: '1px solid #fde047',
            color: '#854d0e',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <strong>Network Error:</strong> {error}
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={spinnerStyle}></div>
            <p style={{ color: '#64748b', margin: 0, fontWeight: '500' }}>Fetching post items from API...</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {posts.map((post) => (
              <article key={post.id} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: '#3b82f6',
                    fontWeight: '700',
                    letterSpacing: '0.05em'
                  }}>
                    Post ID #{post.id}
                  </span>
                  <h3 style={{
                    color: '#1e293b',
                    fontSize: '1.2rem',
                    margin: '10px 0 12px 0',
                    lineHeight: '1.4',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    color: '#475569',
                    fontSize: '0.925rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {post.body}
                  </p>
                </div>
                
                <div style={{
                  marginTop: '20px',
                  paddingTop: '15px',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                    color: '#475569'
                  }}>
                    {post.userId}
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Author Code</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Posts;