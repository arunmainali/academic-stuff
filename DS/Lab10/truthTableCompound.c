#include <stdio.h>

int main() {
  char P[] = { 'F', 'F', 'T', 'T'};
  char Q[] = { 'F', 'T', 'F', 'T'};

  char Pzo[] = { 0, 0, 1, 1};
  char Qzo[] = { 0, 1, 0, 1};

  int negp, negq, pimpq, pbimq, pconq, pdisq, pxorq;
  printf("p\tq\t~p\t~q\tp^q\tpvq\tp->q\tp<->q\tp xor q");
  for (int i = 0; i < 4; i++) {
    // negation P
    if (Pzo[i] == 0) negp = 'T';
    else negp = 'F';
    // negation Q
    if (Qzo[i] == 0) negq = 'T';
    else negq = 'F';
    // conjuction
    if (Pzo[i] == 1 && Qzo[i] == 1 ) pconq = 'T';
    else pconq = 'F';
    // disjunction
    if (Pzo[i] == 1 || Qzo[i] == 1 ) pconq = 'T';
    else pconq = 'F';
    // implication
    if (Pzo[i] == 1 && Qzo[i] == 0) pimpq = 'F';
    else pimpq = 'T';
    // biimplication
    if (Pzo[i] == Qzo[i]) pbimq = 'T';
    else pbimq = 'F';
    // exclusive or
    if (Pzo[i] == Qzo[i]) pxorq = 'F';
    else pxorq = 'T';

    printf("\n%c\t%c\t%c\t%c\t%c\t%c\t%c\t%c\t%c", P[i], Q[i], negp, negq, pconq, pdisq, pimpq, pbimq, pxorq);
  }

  return 0;
}

