function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Tokiniaina Portfolio. All rights
          reserved.
        </p>
        <p className="text-xs mt-2">
          Built with Nextjs, React, TypeScript, TailwindCSS and ShadcnUI
        </p>
      </div>
    </footer>
  );
}

export default Footer;
