export default function Index() {
  return (
    <section
      className="section has-background-info-light"
      style={{ height: '100vh' }}
    >
      <div className="container">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-three-quarters">
            <h1 className="title">Hello World</h1>
            <p className="subtitle">
              Built with Remix, Bulma, and Font Awesome
            </p>
            <form className="box">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="e.g. alex@example.com"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="********"
                  />
                </div>
              </div>

              <p className="buttons">
                <button className="button is-small">
                  <span className="icon is-small">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </button>
                <button className="button">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </button>
                <button className="button is-medium">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </button>
                <button className="button is-large">
                  <span className="icon is-medium">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </button>
              </p>
            </form>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </section>
  );
}
