"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Subscription() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const router = useRouter(); // Initialize router here

    const openModal = (plan: string) => {
        setSelectedPlan(plan);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Annual Plan */}
                <Card className="w-96 h-[28rem] shadow-lg hover:shadow-xl border border-gray-200 transition-transform transform hover:scale-105 relative flex flex-col">
                    {/* Recommended Tag */}
                    <div className="absolute top-0 -left-3 translate-y-[-50%] bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
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
                        <p className="text-gray-600 text-lg mt-2">First month free!</p>
                        <Button
                            className="w-full bg-green-400 text-white hover:bg-green-600 mt-4 self-stretch"
                            onClick={() => openModal("Annual")}
                        >
                            Choose Annual
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
                        <p className="text-gray-600 text-lg mt-2">Yearly $36.</p>
                        <Button
                            className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-4 self-stretch"
                            onClick={() => openModal("Monthly")}
                        >
                            Choose Monthly
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            {/* ShadCN Modal */}
            <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Enter Card Details</DialogTitle>
                        <DialogDescription>
                            Complete your subscription for the <strong>{selectedPlan}</strong> plan.
                        </DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4">
                        <Input type="text" placeholder="Card Number" />
                        <Input type="text" placeholder="Expiration Date (MM/YY)" />
                        <Input type="text" placeholder="CVV" />
                    </form>
                    <DialogFooter>
                        <Button
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() => {
                                closeModal();
                                router.push("/feed"); // Redirect to the feed page
                            }}
                        >
                            Pay Now
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
