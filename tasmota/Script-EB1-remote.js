>D

; EB1 via gsm

bugfix="vars"
cnt=0
date=""
time=""

>BS

tper=60
smlj=0

=>sensor53 r

>W

@<b>Local:</b> %date% %time%
@<b>Vars:</b> cnt=%0cnt% tper=%0tper% smlj=%0smlj%
@<hr>

>S

if cnt==50
then
tper=11
smlj=1
endif

if cnt==120
then
tper=301
endif

time=st(tstamp T 2)
date=st(tstamp T 1)

cnt+=1

>M 1

; change to your gpios and mode
; power off is required 
;  v   v             v
+1,19,mN1,1,9600,EB1,18,50,r010400010001,r0104006C0002,r010400160002,r010400260003,r010400790003,r0104007F0002,r0104000B0002

; 01

1,01040Cxxxxxxxxxxuu@i0:1,Clock ,h,Clock_H,16
1,01040Cxxxxxxxxxxxxuu@i0:1,Clock ,m,Clock_M,16
1,01040Cxxxxxxxxxxxxxxuu@i0:1,Clock ,s,Clock_S,16

1,=h<hr>

; 6C

1,010404UUuu@i1:10,Voltage L1 ,V,VolL1,1
1,010404xxxxUUuu@i1:10,Current L1 ,A,CurL1,2

1,=h<hr>

; 16

1,010408UUuuUUuu@i2:1000,Total Energy Import ,kWh,TotEneImp,3
1,010408xxxxxxxxUUuuUUuu@i2:1000,Total Energy Export ,kWh,TotEneExp,3

1,=h<hr>

; 26

1,01040CUUuuUUuu@i3:1000,Total Energy T1 Vazio ,kWh,TotEneT1,3
1,01040CxxxxxxxxUUuuUUuu@i3:1000,Total Energy T2 Ponta ,kWh,TotEneT2,3
1,01040CxxxxxxxxxxxxxxxxUUuuUUuu@i3:1000,Total Energy T3 Cheias ,kWh,TotEneT3,3

1,=h<hr>

; 79

1,01040aUUuuUUuu@i4:1,Active Power ,W,ActPow,16
1,01040axxxxxxxxUUuuUUuu@i4:1,Active Power Export ,W,ActPowExp,0
1,01040axxxxxxxxxxxxxxxxUUuu@i4:1000,Power Factor ,pu,PowFac,3

; 7F

1,01040aUUuu@i5:10,Frequency ,Hz,Frequency,2

; 0B

1,010406uu@i6:1,Tariff ,,Tariff,0

#

; eof
