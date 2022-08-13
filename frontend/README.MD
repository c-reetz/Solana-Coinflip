# Frontend
The "Flip" folder contains an example repo of the webpage. Inside you will find how to craft the Transaction. This can be found in:
`flip/src/components/Betting.tsx`

Since VRF requesting is implemented on your own authority keypair, you will need to change this.

VRF requesting seemingly won't work as a Next.JS API call, which is why I made the `vrfRequestScript`folder, in here you will find a typescript file you can run on a server, which will keep on requesting VRF, so you don't have a result which stays the same in the VRF buffer.
Remember to compile it to javascript - or you can just run it with ts-node