"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ClipboardPlus } from "lucide-react"

export function AbcLogButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 z-50 h-14 gap-2.5 rounded-full px-6 shadow-lg shadow-primary/25 text-base font-semibold"
      >
        <ClipboardPlus className="h-5 w-5" />
        Quick-Log Behavior
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>ABC Behavior Log</DialogTitle>
            <DialogDescription>
              Record the Antecedent, Behavior, and Consequence of the observed event.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="antecedent">Antecedent</Label>
              <Textarea
                id="antecedent"
                placeholder="What happened before the behavior?"
                className="resize-none"
                rows={2}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="behavior">Behavior</Label>
              <Textarea
                id="behavior"
                placeholder="Describe the observed behavior..."
                className="resize-none"
                rows={2}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="consequence">Consequence</Label>
              <Textarea
                id="consequence"
                placeholder="What happened after the behavior?"
                className="resize-none"
                rows={2}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="severity">Severity</Label>
              <Select>
                <SelectTrigger id="severity">
                  <SelectValue placeholder="Select severity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save Log</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
