class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();// se crea la unica intancia compartida a nivel de app
        }

        return Singleton.instance;
    }
    public mostrarPorConsola() {
        console.log('Método de Singleton')
    }
}