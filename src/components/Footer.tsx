import EvyMindLogo from "@/assets/logos/evymind-logo.png";

export const Footer = () => {
  return (
    <footer class="relative">
      <div class="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
        <div class="flex justify-center">
          <img src={EvyMindLogo} alt="Evymind" class="h-8 opacity-90" />
        </div>
      </div>
    </footer>
  );
};
