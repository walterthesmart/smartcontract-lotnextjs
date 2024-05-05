import ConnectButton  from "@web3uikit";


export default function Header() {
    return (
            <nav>
                <h1>Lottery</h1>
                <div>
                    <ConnectButton />
                </div>
            </nav>
    );
}