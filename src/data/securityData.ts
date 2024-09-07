import { Archive, KeyRound, Recycle, ShieldAlert, ShieldCheck, Wallet } from 'lucide-react'

export const securityData = [
    {
        id: 1,
        title: 'Use Strong Passwords',
        subtitle: 'Always use strong, unique passwords for each of your crypto accounts. Consider using a password manager to keep track of them securely.',
        icons: KeyRound
    },
    {
        id: 2,
        title: 'Enable 2FA',
        subtitle: 'Add an extra layer of security by enabling 2FA on all your crypto exchanges and wallet accounts. This adds an additional verification step to your login process.',
        icons: ShieldCheck
    },
    {
        id: 3,
        title: 'Choose Trusted Wallets',
        subtitle: 'Opt for well-known and trusted wallets and exchanges that are regularly reviewed for their security practices. Look for features such as cold storage and insurance.',
        icons: Wallet
    },
    {
        id: 4,
        title: 'Avoid Phishing Scams',
        subtitle: 'Be wary of emails, messages, or websites that ask for your personal information or private keys. Always verify the authenticity of the source before providing any information.',
        icons: ShieldAlert
    },
    {
        id: 5,
        title: 'Backup Your Wallet',
        subtitle: "Regularly back up your wallet's private keys or recovery phrases and store them in a safe place. This ensures you can recover your assets if your device is lost or damaged.",
        icons: Archive
    },
    {
        id: 6,
        title: 'Keep Software Updated',
        subtitle: 'Ensure that your wallets and software are always updated to the latest versions. Updates often include security patches to protect against new threats.',
        icons: Recycle
    },
]