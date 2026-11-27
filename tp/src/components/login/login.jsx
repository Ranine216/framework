import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    function handleSubmit(e) {
        e.preventDefault(); // empêche le rechargement automatique de la page

        let newError = {};

        if (!email.trim()) {
            newError.email = "L'email est obligatoire";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newError.email = "Adresse email invalide";
        }

        if (!password.trim()) {
            newError.password = "Veuillez saisir votre mot de passe";
        } else if (password.length < 8) {
            newError.password = "Le mot de passe doit contenir au moins 8 caractères";
        } else if (!/[A-Z]/.test(password)) {
            newError.password = "Au moins une lettre majuscule";
        } else if (!/[0-9]/.test(password)) {
            newError.password = "Au moins un chiffre";
        } else if (!/[^a-zA-Z0-9]/.test(password)) {
            newError.password = "Au moins un caractère spécial";
        }

        setError(newError);

        if (Object.keys(newError).length === 0) {
            alert("Connexion valide");
            console.log(email, password);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Veuillez introduire votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && (
                    <span style={{ color: "red" }}>{error.email}</span>
                )}

                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error.password && (
                    <span style={{ color: "red" }}>{error.password}</span>
                )}

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}

export default Login;