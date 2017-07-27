declare module 'yaku/lib/Observable' {
    interface Next<T> {
        (val: T): PromiseLike<any> | any
    }

    class Observable<T> {
        constructor ()
        subscribe (onNext?: Next<T>, onError?: Next<T>): Observable<T>
        next (val?: T): void
        error (reason?): void
        publisher: Observable<T>
        subscribers: [Observable<T>]
        unsubscribe (): void
    }

    export = Observable
}
