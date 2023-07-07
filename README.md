# router 과제 구현

## 요구사항

**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```tsx
const { push } = useRouter();
```

## 코드 설명
```tsx
// App.tsx
<Router>
  <Route pathname="/" component={<Root />} />
  <Route pathname="/about" component={<About />} />
</Router>
```

Router 컴포넌트에서는 children 중 path가 일치하는 자식 컴포넌트를 반환합니다.
```tsx
// Router.tsx
const Router = ({ children }) => {
  const path = window.location.pathname;
  return children.filter((child) => path === child.props.pathname)
}
```

path에 해당하는 컴포넌트를 반환합니다.
```tsx
// Route.tsx
const Route = ({component}) => {
  return component
};

export default Route
```

useRouter hook에서는 push를 통해 들어온 경로를 window.location.pathname 으로 지정합니다. 
```tsx
const useRouter = () => {
  const push = (path) => {
    window.location.pathname = path;
  }
  return { push }
}

export default useRouter;
```

UI를 담당하는 컴포넌트에서 useRouter hook의 push를 사용하여 이동할 경로를 보냅니다.
```tsx
const Root = () => {
  const { push }  = useRouter()
  return (
    <div className="container">
      root
      <button onClick={() => { push('/about')}}>about</button>
    </div>
  );
};

export default Root;
```
