The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access properties. Optional chaining will short-circuit if the left side is null or undefined, preventing the error.  The nullish coalescing operator provides a default value if the left side is null or undefined.

```javascript
// Correct code
const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name ?? 'Loading...'}</Text> {/* Safe access with optional chaining and default value */}
    </View>
  );
};
```

This approach ensures that the component gracefully handles the situation where `data` is still `null` or `undefined`, preventing the runtime error.  Consider using a loading indicator while fetching data to improve the user experience.