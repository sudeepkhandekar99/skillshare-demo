import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Subscription() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Annual Plan (Recommended) */}
        <Card className="w-96 h-[28rem] shadow-lg hover:shadow-xl border border-gray-200 transition-transform transform hover:scale-105 relative flex flex-col">
          <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
            Recommended
          </div>
          <CardHeader className="bg-green-50 text-center py-6 rounded-t-md">
            <h2 className="text-2xl font-bold text-green-400">Annual Plan</h2>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center flex-grow">
            <p className="text-5xl font-extrabold text-green-600">$33</p>
            <p className="text-gray-600 text-lg mt-2">per year</p>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2">
            <p className="text-gray-500">
              First month free!
            </p>
            <Button className="w-full bg-green-400 text-white hover:bg-green-600 mt-4 self-stretch">
              <strong>Choose Annual</strong>
            </Button>
          </CardFooter>
        </Card>

        {/* Monthly Plan */}
        <Card className="w-96 h-[28rem] shadow-lg hover:shadow-xl border border-gray-200 transition-transform transform hover:scale-105 relative flex flex-col">
          <CardHeader className="bg-blue-50 text-center py-6 rounded-t-md">
            <h2 className="text-2xl font-bold text-blue-600">Monthly Plan</h2>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center flex-grow">
            <p className="text-5xl font-extrabold text-blue-600">$3</p>
            <p className="text-gray-600 text-lg mt-2">per month</p>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2">
            <p className="text-gray-500">
              $36/year, billed monthly
            </p>
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-4 self-stretch">
              <strong>Choose Monthly</strong>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
