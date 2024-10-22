import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Subscription } from "@/lib/types";

interface SubscriptionManagementProps {
  subscriptionOptions: Subscription[];
  globalSubscription: Subscription | null;
  onSubscribe: (subscription: Subscription) => void;
  onCancel: () => void;
}

export function SubscriptionManagement({
  subscriptionOptions,
  globalSubscription,
  onSubscribe,
  onCancel,
}: SubscriptionManagementProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Your Subscriptions</CardTitle>
        <CardDescription>
          Choose a subscription plan or manage your current subscription
        </CardDescription>
      </CardHeader>
      <CardContent>
        {globalSubscription ? (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">
                Current Subscription: {globalSubscription.name}
              </h3>
              <p>Price: ${globalSubscription.price.toFixed(2)}/month</p>
            </div>
            <div>
              <h4 className="font-medium">Benefits:</h4>
              <ul className="list-disc list-inside">
                {globalSubscription.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <Button variant="destructive" onClick={onCancel}>
              Cancel Subscription
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Choose a Subscription Plan
            </h3>
            {subscriptionOptions.map((option) => (
              <Card key={option.id} className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{option.name}</h4>
                    <p>${option.price.toFixed(2)}/month</p>
                  </div>
                  <Button onClick={() => onSubscribe(option)}>Subscribe</Button>
                </div>
                <div className="mt-2">
                  <h5 className="font-medium">Benefits:</h5>
                  <ul className="list-disc list-inside">
                    {option.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
