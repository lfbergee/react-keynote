export const usestate = `const [name, setName] = useState("Foo Bar")`;

export const usecontext = `const value = useContext(SomeContext)`;

export const useeffect = `useEffect(() => {
    window.setTitle(SomeValue);
    return () => window.setTitle("DefaultValue");
}, [SomeValue])`;
