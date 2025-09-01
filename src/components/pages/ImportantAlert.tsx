import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function ImportantAlert() {
  return (
    <Alert className="border-hospital-orange bg-orange-50 border-l-4 border-l-hospital-orange rounded-none">
      <svg className="h-4 w-4 text-hospital-orange" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5zM11 14v2h2v-2h-2zm0-6v4h2V8h-2z"/>
      </svg>
      <AlertTitle className="text-hospital-orange font-semibold">Important Notice</AlertTitle>
      <AlertDescription>
        COVID-19 safety protocols are in place. Please wear masks and maintain social distancing. 
        <Button variant="link" className="text-hospital-blue p-0 ml-2 h-auto">Learn more</Button>
      </AlertDescription>
    </Alert>
  );
}
