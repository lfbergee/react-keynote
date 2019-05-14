export const code = `const SomeComp = lazy(() => import("./SomeComp"))

<App>
    <Suspense fallback={<Spinner />}>
        {this.props.showSomeComp && <SomeComp />}
    </Suspense>
</App>`;
