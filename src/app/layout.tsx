import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<title>Oberstaff</title>
			<body
			>
				{children}
			</body>
		</html>
	);
}
