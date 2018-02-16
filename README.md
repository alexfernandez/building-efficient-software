# building-efficient-software

Companion repo for the talk "Building Efficient Software".

## Optimization

Function multiplyTrivial32:

2 movq    move quad word
2 shrq    shift right quad-word
1 testb   compare with byte?
1 jnz     jump not zero
1 shll    shift left long?
2 movzxwl move ? long?
1 sarl    shift arithmetically right long?
3 imull   multiply long
2 addl    add long
1 shrl    shift right long?

Function multiplyMagic 32:

3 movq    move quad word
2 shrq    shift right quad-word
1 testb   compare with byte?
1 jnz     jump not zero
2 movzxwl move ? long?
1 andl    and long?
2 imull   multiply long
1 jo      jump overflow
1 leal    load effective address

