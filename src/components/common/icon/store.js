// @flow

import type { BasicIconPropTypes } from 'constants/icon'

import React from 'react'

const StoreIcon = ({ fill }: BasicIconPropTypes) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.857 6.485L20.857 1.485C20.7681 1.33709 20.6425 1.21469 20.4923 1.1297C20.3422 1.04472 20.1726 1.00003 20 1H4.00001C3.82745 1.00003 3.65784 1.04472 3.50767 1.1297C3.3575 1.21469 3.23187 1.33709 3.14301 1.485L0.143006 6.485C0.0494961 6.64051 6.35974e-05 6.81854 6.16649e-06 7C-0.00185276 8.05849 0.416644 9.07441 1.16352 9.82447C1.91039 10.5745 2.92452 10.9974 3.98301 11H3.99101C4.97875 11.0025 5.93203 10.6371 6.66501 9.975C7.39585 10.6355 8.34589 11.0013 9.33101 11.0013C10.3161 11.0013 11.2662 10.6355 11.997 9.975C12.7282 10.6369 13.6792 11.0035 14.6655 11.0035C15.6518 11.0035 16.6029 10.6369 17.334 9.975C17.908 10.4928 18.6199 10.8328 19.3834 10.9538C20.1469 11.0747 20.9291 10.9714 21.635 10.6564C22.3409 10.3413 22.9401 9.82811 23.3599 9.17905C23.7798 8.52999 24.0021 7.773 24 7C23.9999 6.81854 23.9505 6.64051 23.857 6.485Z" />
    <path d="M20.016 13.0001C19.0864 13.0008 18.1694 12.7858 17.337 12.3721L17.322 12.3791C16.6194 12.7294 15.8543 12.9372 15.071 12.9904C14.2877 13.0436 13.5016 12.9412 12.758 12.6891C12.4979 12.6016 12.244 12.4967 11.998 12.3751L11.987 12.3801C11.2846 12.7306 10.5197 12.9385 9.73644 12.9915C8.95322 13.0445 8.16725 12.9417 7.424 12.6891C7.16422 12.6016 6.91064 12.4967 6.665 12.3751C5.83409 12.7877 4.91871 13.0016 3.991 13.0001C3.65878 12.9969 3.32736 12.9668 3 12.9101V23.0001C3 23.2653 3.10536 23.5196 3.29289 23.7072C3.48043 23.8947 3.73478 24.0001 4 24.0001H10V18.0001H14V24.0001H20C20.2652 24.0001 20.5196 23.8947 20.7071 23.7072C20.8946 23.5196 21 23.2653 21 23.0001V12.9061C20.6751 12.9643 20.346 12.9957 20.016 13.0001Z" />
  </svg>
)

export default StoreIcon
