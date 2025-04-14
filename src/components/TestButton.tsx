"use client";
function TestButton() {
  async function handleSendEmail() {
    try {
      const response = await fetch("/api/email-reminder");

      console.log(response);

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <button className="cursor-pointer bg-red-300" onClick={handleSendEmail}>
        Test Button
      </button>
    </div>
  );
}

export default TestButton;
