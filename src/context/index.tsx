import { DateProvider } from "./date";
import { GroupProvider } from "./group"
import { ModalOpenProvider } from "./modal";
import { ParticipantsProvider } from "./participants";
import { RangeValueProvider } from "./rangeValue";
import { StepProvider } from "./step";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <StepProvider>
      <GroupProvider>
        <ParticipantsProvider>
          <RangeValueProvider>
            <DateProvider>
              <ModalOpenProvider >
                {children}
              </ModalOpenProvider>
            </DateProvider>
          </RangeValueProvider>
        </ParticipantsProvider>
      </GroupProvider>
    </StepProvider>
  )

};