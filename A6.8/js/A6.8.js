@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        button = (Button) findViewById(R.id.button);
        waveLoadingView = (WaveLoadingView) findViewById(R.id.waveLoadingView);
        waveLoadingView.setProgressValue(0);

        button.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View v) {
                waveLoadingView.setProgressValue(1);