function MyButton(props) {
    return <button {...props} />
  }
  
  function App() {
    const [value, setValue] = React.useState('some\ntext');
    const [copied, setCopied] = React.useState(false);
    const onChange = React.useCallback(({target: {value}}) => {
      setValue(value);
      setCopied(true);
    }, [])
    const onClick = React.useCallback(({target: {innerText}}) => {
      console.log(`Clicked on "${innerText}"!`);
    }, [])
    const onCopy = React.useCallback(() => {
      setCopied(true);
    }, [])
    
    return (
      <div className="app">
        <h1>react-copy-to-clipboard</h1>
  
        <section className="section">
          <textarea onChange={onChange} rows={2} cols={10} value={value} />
        </section>
  
        <section className="section">
          <h2>1. Button</h2>
          <CopyToClipboard onCopy={onCopy} text={value}>
            <MyButton>Copy to clipboard with cuustom MyButton component</MyButton>
          </CopyToClipboard>
        </section>
  
        <section className="section">
          <h2>1. Button</h2>
          <CopyToClipboard onCopy={onCopy} text={value}>
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
        </section>
  
        <section className="section">
          <h2>2. Span</h2>
          <CopyToClipboard onCopy={onCopy} text={value}>
            <span>Copy to clipboard with span</span>
          </CopyToClipboard>
        </section>
  
        <section className="section">
          <h2>3. with onClick</h2>
          <CopyToClipboard
            onCopy={onCopy}
            options={{message: 'Whoa!'}}
            text={value}>
            <button onClick={onClick}>Copy to clipboard with onClick prop</button>
          </CopyToClipboard>
        </section>
  
        <section className="section">
          {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
        </section>
  
        <section className="section">
          <textarea cols="22" rows="3" style={{marginTop: '1em'}} />
        </section>
      </div>
    );
  }
  
  const appRoot = document.createElement('div');
  document.body.appendChild(appRoot);
  ReactDOM.render(<App />, appRoot);