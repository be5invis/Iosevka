PLANS := square

$(PLANS):
	pnpm run build -- ttf-unhinted::$@

.PHONY: $(PLANS)
