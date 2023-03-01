# styled_repro

Steps to reproduce:

1. git clone the repository above
2. run `npm install`
3. run `npm run build`

Despite its simplicity, significant time was taken to compile the project.


If we comment out this line in `index.tsx`

```JSX
const TestComponent = (props: React.ComponentProps<typeof StyledContainer>) => {
```
And uncomment this line
```JSX
const TestComponent = (props: any)
```

the build can finish very quickly.

Separately, if we don't use `styled` from `@mui/system/styled` but use the one from `@emotion/styled` the issue goes away, and the project will be built very quickly as well. 
