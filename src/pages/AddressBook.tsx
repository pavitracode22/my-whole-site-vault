import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AddressBook = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Address Book</h1>
        <p className="text-text-secondary">Manage your shipping addresses here. Connect to Supabase for full functionality.</p>
      </main>
      <Footer />
    </div>
  );
};

export default AddressBook;