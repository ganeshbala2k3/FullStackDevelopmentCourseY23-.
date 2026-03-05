useEffect(() => {
  console.log("I run ON EVERY RENDER.");
}); // <--- No Array at all



//one program changes
const [count, setCount] = useState(0);

useEffect(() => {
  // This runs on the first render AND every time 'count' changes
  document.title = `You clicked ${count} times`;
  
  console.log("The count is now:", count);
}, [count]); // Only re-run if 'count' changes





//only once
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick...");
  }, 1000);

  // The cleanup function
  return () => {
    console.log("Component is leaving. Cleaning up timer!");
    clearInterval(timer);
  };
}, []);


useEffect(() => {
  console.log("Component has landed on the screen!");
  
  // Example: API call or setting initial focus
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  };

  fetchData();
}, []); // Empty array = run only once